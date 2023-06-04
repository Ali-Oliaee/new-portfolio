'use client'

import './styles.sass'
import Link from 'next/link'
import { useState } from 'react'
import { getDictionary } from 'get-dictionary'
import {LanguageSelector,ThemeSwitcher,SocialMedias} from '..'

export default async function Drawer  ({lang}: LanguageProp) {
  const [ visible, setVisible ] = useState<boolean>(false)
  const dictionary = await getDictionary(lang)

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
            <Link className="drawer-link" href="#">{dictionary.home}</Link>
            <Link className="drawer-link" href="#about">
              {dictionary.about}
            </Link>
            <Link className="drawer-link" href="#experience">
              {dictionary.experience}
            </Link>
            <Link className="drawer-link" href="#contact">
              {dictionary.contact}
            </Link>
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
