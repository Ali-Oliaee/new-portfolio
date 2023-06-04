'use client'

import { useTheme } from "next-themes"
import Image from "next/image"
import { useState, useEffect } from "react"
import './styles.sass'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()
    const themeToggler = () => 
        theme === 'light' ? setTheme('dark') : setTheme('light')

    useEffect(() => {
        setMounted(true)
    },[])

    if (!mounted) {
        return null
    }

    return (
        <button className="themeButton" onClick={themeToggler}> 
               {theme === 'light' ? (
                <Image
                src="/sun.svg"
                alt="moon"
                width={60}
                height={60}
                />
              ) : (
              <Image
                src="/moon.svg"
                alt="moon"
                width={60}
                height={60}
                />)
              } 
             </button>
    )
}

export default ThemeSwitcher