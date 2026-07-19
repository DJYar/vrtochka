import type { Game } from '../app/types/game'

export const games: Game[] = [
  {
    id: 'beat-saber',
    slug: 'beat-saber',
    title: 'Beat Saber',
    shortDescription: 'Ритмічна VR-аркада, де потрібно розсікати світлові блоки в такт музиці та тримати темп.',
    youtubeVideoId: 'pa4vrynwkwY',
    categories: ['arcades', 'sports', 'party', 'kids'],
    players: { min: 1, max: 2 },
    ageRating: '10+',
    durationMinutes: 30,
    featured: true
  },
  {
    id: 'pistol-whip',
    slug: 'pistol-whip',
    title: 'Pistol Whip',
    shortDescription: 'Динамічний музичний шутер із кінематографічними сценами, ухиленнями та стріляниною в ритм.',
    youtubeVideoId: '1jYjBrAln2w',
    categories: ['shooters', 'arcades', 'simulators'],
    players: { min: 1, max: 1 },
    ageRating: '16+',
    durationMinutes: 30,
    featured: true
  },
  {
    id: 'superhot-vr',
    slug: 'superhot-vr',
    title: 'SUPERHOT VR',
    shortDescription: 'Тактичний екшн, у якому час рухається разом із гравцем, а кожне рішення змінює перебіг сутички.',
    youtubeVideoId: 'pzG7Wc6mbwE',
    categories: ['shooters', 'simulators', 'adventures'],
    players: { min: 1, max: 1 },
    ageRating: '16+',
    durationMinutes: 40,
    featured: true
  },
  {
    id: 'space-pirate-trainer',
    slug: 'space-pirate-trainer',
    title: 'Space Pirate Trainer',
    shortDescription: 'Космічна аркада з бластерами, щитами та хвилями дронів, що чудово підходить для першого сеансу.',
    youtubeVideoId: 'xfa9Jqm34b0',
    categories: ['shooters', 'arcades', 'simulators'],
    players: { min: 1, max: 2 },
    ageRating: '10+',
    durationMinutes: 30,
    featured: true
  },
  {
    id: 'synth-riders',
    slug: 'synth-riders',
    title: 'Synth Riders',
    shortDescription: 'Танцювальна ритм-гра з неоновими трасами, активними рухами та режимами для дружнього змагання.',
    youtubeVideoId: 'jirqqoL2JrU',
    categories: ['arcades', 'sports', 'party', 'kids'],
    players: { min: 1, max: 4 },
    ageRating: '8+',
    durationMinutes: 30,
    featured: true
  },
  {
    id: 'fruit-ninja-vr',
    slug: 'fruit-ninja-vr',
    title: 'Fruit Ninja VR',
    shortDescription: 'Знайома аркада у просторі VR: швидкі помахи, фруктові комбінації та прості правила для будь-якого віку.',
    youtubeVideoId: 'hPY4TRRHwZc',
    categories: ['arcades', 'sports', 'kids'],
    players: { min: 1, max: 1 },
    ageRating: '7+',
    durationMinutes: 20,
    featured: true
  },
  {
    id: 'angry-birds-vr',
    slug: 'angry-birds-vr',
    title: 'Angry Birds VR: Isle of Pigs',
    shortDescription: 'Весела просторова головоломка з рогаткою, кумедними конструкціями та десятками коротких рівнів.',
    youtubeVideoId: '87cBPQlTJgw',
    categories: ['arcades', 'adventures', 'kids'],
    players: { min: 1, max: 1 },
    ageRating: '7+',
    durationMinutes: 30,
    featured: true
  },
  {
    id: 'moss',
    slug: 'moss',
    title: 'Moss',
    shortDescription: 'Казкова пригода з дослідженням світу, головоломками та маленькою героїнею, якій допомагає сам гравець.',
    youtubeVideoId: 'Hbsfgsncdzw',
    categories: ['adventures', 'kids'],
    players: { min: 1, max: 1 },
    ageRating: '10+',
    durationMinutes: 45,
    featured: true
  },
  {
    id: 'eleven-table-tennis',
    slug: 'eleven-table-tennis',
    title: 'Eleven Table Tennis',
    shortDescription: 'Реалістичний симулятор настільного тенісу для тренування ударів, матчів із друзями та спортивних дуелей.',
    youtubeVideoId: '7J4Io458jXo',
    categories: ['sports', 'simulators', 'party'],
    players: { min: 1, max: 2 },
    ageRating: '8+',
    durationMinutes: 30,
    featured: false
  },
  {
    id: 'arizona-sunshine',
    slug: 'arizona-sunshine',
    title: 'Arizona Sunshine',
    shortDescription: 'Сюжетний VR-шутер про виживання з дослідженням локацій, напруженими сутичками та кооперативним режимом.',
    youtubeVideoId: 'l_gWDl_f6V8',
    categories: ['shooters', 'simulators', 'adventures'],
    players: { min: 1, max: 4 },
    ageRating: '18+',
    durationMinutes: 60,
    featured: false
  }
]
