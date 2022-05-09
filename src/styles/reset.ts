import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.6;
    font-size: 24px;
    font-family: "Noto Sans KR", sans-serif;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  } 

  input {
    border: 0;
    outline: 0;
  }

  button {
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  a {
    display: inline-block;
    text-decoration: none;
  }
  ol,ul, li {
    list-style: none;
  }

  table {
  border-collapse: collapse;
  border-spacing: 0;
  }
`

export default GlobalStyle
