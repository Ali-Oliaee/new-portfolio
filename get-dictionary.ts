// import 'server-only'
import type { Locale } from './next-i18next.config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fa: () => import('./dictionaries/fa.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()