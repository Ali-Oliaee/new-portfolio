'use client'

import './styles.sass'
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const ThemeSwitcher: React.FC = () => {
    const [mounted, setMounted] = useState<boolean>(false)
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