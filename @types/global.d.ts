/* eslint-disable no-unused-vars */
import { Locale } from '../../next-i18next.config'

declare global {
    type LanguageParam = {
        params: { lang: Locale }
    }
    type LanguageProp = {
        lang: Locale
    }

}
