import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url("https://use.typekit.net/kqk7uco.css");
  :root {
    --primary-color: #ed1f24;
    --white: #FFFAFF;
    /* --yellow: #F2E9CE; */
    --yellow: #F7F0F0;
    --pink: #F29696;
    --background: #3B3A3C;
    /* --background: #FFFFFF; */
    --box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
    --speed: 500ms; 
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: futura-pt, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
    min-width: 350px;
    background-color: var(--background)
  }



  a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

ul {
  list-style-type: none;
}
`
