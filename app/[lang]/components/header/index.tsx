import './styles.sass'
import Link from 'next/link'
import Drawer from '@components/drawer'
import ThemeSwitcher from '@components/theme-switcher'
import LanguageSelector from '@components/language-selector/language-selector'
import { getDictionary } from 'get-dictionary'

export default async function Header ({params: {lang}}:LanguageProp) {
  const dictionary = await getDictionary(lang)

  return (
    <header>
      <h2 className='logo'>Ali Oliaee</h2>
      <div className="options">
        <div className="nav">
          <Link className="nav-link" href="#">Home</Link>
          <Link className="nav-link" href="#about">About</Link>
          <Link className="nav-link" href="#experience">Experience</Link>
          <Link className="nav-link" href="#contact">Contact</Link>
        </div>
        <LanguageSelector/>
        <ThemeSwitcher/>
      </div>
      <div className="burger-button">
        <Drawer/>
      </div>
    </header>
  )
}
