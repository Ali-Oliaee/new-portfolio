'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import './styles.sass'

const LanguageSelector = () => {
    const router = useRouter()
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }

    return (
    <select
    className='languageSelector'
    onChange={
      (e) => router.push(redirectedPathName(e.target.value))
    }
    >
      <option value="en">En</option>
      <option value="fa">Fa</option>
    </select>
    )
}

export default LanguageSelector