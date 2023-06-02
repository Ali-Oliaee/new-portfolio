// import 'server-only'
import type { Locale } from './next-i18next.config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fa: () => import('./dictionaries/fa.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()