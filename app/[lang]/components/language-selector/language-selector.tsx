'use client'

import './styles.sass'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

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
    value={pathName.split('/')[1]}
    >
      <option value="en">En</option>
      <option value="fa">Fa</option>
    </select>
    )
}

export default LanguageSelector