'use client'

import { ThemeProvider } from "next-themes"


const LocalThemeProvider = ({children}: any) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default LocalThemeProvider