/* eslint-disable no-unused-vars */
import { Locale } from '../../next-i18next.config'

declare global {
    type LanguageProp = {
        params: { lang: Locale }
    }
}
