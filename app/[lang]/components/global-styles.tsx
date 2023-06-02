'use client'

import { createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
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