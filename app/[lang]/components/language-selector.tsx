'use client'

import { useRouter } from "next/navigation"
import { LanguageOption, LanguageSelect } from "@styles/language-selector"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../../next-i18next.config'

const LanguageSelector = () => {
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }


   
    return(
        <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
    )
}

export default LanguageSelector