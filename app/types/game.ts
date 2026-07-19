export type GameCategorySlug =
  | 'shooters'
  | 'arcades'
  | 'simulators'
  | 'adventures'
  | 'sports'
  | 'party'
  | 'kids'

export type GameCategoryFilter = 'all' | GameCategorySlug

export interface GameCategory {
  slug: GameCategorySlug
  title: string
  order: number
}

export interface Game {
  id: string
  slug: string
  title: string
  shortDescription: string
  youtubeVideoId: string
  categories: GameCategorySlug[]
  players: {
    min: number
    max: number
  }
  ageRating: string
  durationMinutes: number
  featured: boolean
}
