'use client'

import { createGlobalStyle} from "styled-components"

// background: ${({ theme }) => theme.body};
// color: ${({ theme }) => theme.text};
const GlobalStyles = createGlobalStyle`
  body {
    transition: all 0.3s linear;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
    font-family: Vazirmatn, Poppins, sans-serif;
  }
  `
export default GlobalStyles