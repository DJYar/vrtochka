import type { GameCategory } from '../app/types/game'

export const gameCategories: GameCategory[] = [
  { slug: 'shooters', title: 'Шутери', order: 1 },
  { slug: 'arcades', title: 'Аркади', order: 2 },
  { slug: 'simulators', title: 'Симулятори', order: 3 },
  { slug: 'adventures', title: 'Пригоди', order: 4 },
  { slug: 'sports', title: 'Спортивні', order: 5 },
  { slug: 'party', title: 'Для компанії', order: 6 },
  { slug: 'kids', title: 'Для дітей', order: 7 }
]
