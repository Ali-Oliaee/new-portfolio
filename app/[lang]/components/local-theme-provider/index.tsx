'use client'

import Props from './types'
import { ThemeProvider } from 'next-themes'


const LocalThemeProvider: React.FC<Props> = ({children}) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default LocalThemeProvider
