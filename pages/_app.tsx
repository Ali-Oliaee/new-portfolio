import { appWithTranslation } from 'next-i18next'
import {ThemeProvider} from "styled-components";
import GlobalStyles from "@components/global-styles";
import { lightTheme, darkTheme } from "@theme/theme";
import { useState } from 'react';

function MyApp({ Component, pageProps }: any) {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <Component {...pageProps} themeToggler={themeToggler}/>
      </>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
