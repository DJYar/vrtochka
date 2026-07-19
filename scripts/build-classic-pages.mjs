import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const root = process.cwd()

function run(command, args, options = {}) {
  const executable = process.platform === 'win32' && command === 'npx' ? 'npx.cmd' : command
  const result = spawnSync(executable, args, {
    cwd: root,
    stdio: options.capture ? 'pipe' : 'inherit',
    encoding: 'utf8',
    env: options.env ?? process.env
  })

  if (result.status !== 0) {
    if (options.allowFailure) return ''
    if (options.capture && result.stderr) process.stderr.write(result.stderr)
    process.exit(result.status ?? 1)
  }

  return options.capture ? result.stdout.trim() : ''
}

function parseGithubRemote(remoteUrl) {
  if (!remoteUrl) return null

  const normalized = remoteUrl
    .replace(/^git@github\.com:/, 'https://github.com/')
    .replace(/\.git$/, '')
    .replace(/\/$/, '')

  const match = normalized.match(/github\.com[/:]([^/]+)\/([^/]+)$/i)
  return match ? { owner: match[1], repo: match[2] } : null
}

let github = null
try {
  const remote = run('git', ['config', '--get', 'remote.origin.url'], { capture: true, allowFailure: true })
  github = parseGithubRemote(remote)
} catch {
  // Environment variables below remain available as a fallback.
}

const customDomain = process.env.PAGES_CUSTOM_DOMAIN?.trim().replace(/^https?:\/\//, '').replace(/\/$/, '')
const owner = process.env.PAGES_OWNER?.trim() || github?.owner
const repo = process.env.PAGES_REPO?.trim() || github?.repo || basename(root)

if (!customDomain && !owner) {
  console.error([
    'Не удалось определить GitHub-аккаунт.',
    'Добавьте remote origin или запустите команду с переменными PAGES_OWNER и PAGES_REPO.',
    'PowerShell: $env:PAGES_OWNER="username"; $env:PAGES_REPO="vrtochka"; npm run pages:build'
  ].join('\n'))
  process.exit(1)
}

const isUserSite = owner && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`
const baseURL = customDomain || isUserSite ? '/' : `/${repo}/`
const siteURL = customDomain
  ? `https://${customDomain}`
  : isUserSite
    ? `https://${owner}.github.io`
    : `https://${owner}.github.io/${repo}`

console.log(`\nСборка GitHub Pages:`)
console.log(`  baseURL: ${baseURL}`)
console.log(`  siteURL: ${siteURL}\n`)

run('npx', ['nuxt', 'build', '--preset', 'github_pages'], {
  env: {
    ...process.env,
    NUXT_APP_BASE_URL: baseURL,
    NUXT_PUBLIC_SITE_URL: siteURL
  }
})

const outputDir = resolve(root, '.output/public')
const docsDir = resolve(root, 'docs')

if (!existsSync(outputDir)) {
  console.error('Nuxt не создал каталог .output/public.')
  process.exit(1)
}

rmSync(docsDir, { recursive: true, force: true })
mkdirSync(docsDir, { recursive: true })
cpSync(outputDir, docsDir, { recursive: true })
writeFileSync(resolve(docsDir, '.nojekyll'), '')

if (customDomain) {
  writeFileSync(resolve(docsDir, 'CNAME'), `${customDomain}\n`)
}

const indexPath = resolve(docsDir, 'index.html')
if (!existsSync(indexPath)) {
  console.error('В docs отсутствует index.html. Публикация GitHub Pages не сработает.')
  process.exit(1)
}

const indexHtml = readFileSync(indexPath, 'utf8')
if (!indexHtml.includes(baseURL)) {
  console.warn(`Предупреждение: baseURL ${baseURL} не найден в docs/index.html. Проверьте пути после публикации.`)
}

console.log('\nГотово: статический сайт записан в ./docs')
console.log('Теперь выполните:')
console.log('  git add docs package.json scripts/build-classic-pages.mjs')
console.log('  git commit -m "Build GitHub Pages"')
console.log('  git push')
