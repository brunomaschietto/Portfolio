import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }

    #root {
        padding: 0;
        margin: 0 auto;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #1a202c;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #4299e1 0%, #9f7aea 100%);
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #3182ce 0%, #805ad5 100%);
    }

    a {
        text-decoration: none;
        transition: all 0.3s ease;
    }

    ::selection {
        background-color: rgba(66, 153, 225, 0.5);
        color: white;
    }

    *:focus-visible {
        outline: 2px solid #4299e1;
        outline-offset: 2px;
        border-radius: 4px;
    }
`