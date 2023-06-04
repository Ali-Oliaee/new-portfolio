'use client'

import './styles.sass'
import Link from 'next/link'
import { useState } from 'react'
import SocialMedias from '@components/social-medias'
import ThemeSwitcher from '@components/theme-switcher'
import LanguageSelector from '@components/language-selector/language-selector'

const Drawer: React.FC = () => {
  const [ visible, setVisible ] = useState<boolean>(false)

  return(
    <>
      {visible ?
        <button className="close-button" onClick={() => setVisible(false)}>
          <span className="close-icon"/>
        </button>
        : 
        <button className="burger-button" onClick={() => setVisible(true)}>
          <span className="burger-icon"/>
        </button>
      }
      {visible && (
        <div className="drawer">
          <div className="drawer-content">
            <div className="drawer-option">
              <ThemeSwitcher/>
            </div>
            <Link className="drawer-link" href="#">Home</Link>
            <Link className="drawer-link" href="#about">About</Link>
            <Link className="drawer-link" href="#experience">Experience</Link>
            <Link className="drawer-link" href="#contact">Contact</Link>
            <div className="drawer-option">
              <LanguageSelector/>
            </div>
            <div className="drawer-footer">
              <div className="divider"/>
              <SocialMedias styles={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
              }}/>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Drawer
