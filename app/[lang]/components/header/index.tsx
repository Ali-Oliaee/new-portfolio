import './styles.sass'
import Link from 'next/link'
import { getDictionary } from 'get-dictionary'
import {Drawer,ThemeSwitcher,LanguageSelector} from '..'

export default async function Header ({lang}: LanguageProp) {
  const dictionary = await getDictionary(lang)

  return (
    <header>
      <h2 className='logo'>Ali Oliaee</h2>
      <div className="options">
        <div className="nav">
          <Link className="nav-link" href="#">{dictionary.home}</Link>
          <Link className="nav-link" href="#about">{dictionary.about}</Link>
          <Link className="nav-link" href="#experience">
            {dictionary.experience}
          </Link>
          <Link className="nav-link" href="#contact">{dictionary.contact}</Link>
        </div>
        <LanguageSelector/>
        <ThemeSwitcher/>
      </div>
      <div className="burger-button">
        <Drawer lang={lang}/>
      </div>
    </header>
  )
}
