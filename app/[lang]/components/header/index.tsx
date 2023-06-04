import './styles.sass'
import Link from "next/link"
import ThemeSwitcher from "@components/theme-switcher"
import LanguageSelector from "@components/language-selector/language-selector"
import Drawer from '@components/drawer'

const Header: React.FC = () => {
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

export default Header