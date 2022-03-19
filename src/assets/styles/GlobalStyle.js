import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background: #f8fbf5;
    color: #2e3057;
    width: 100%;
    min-height: 100vh;
    scrollbar-gutter: stable both-edges;
    overflow-y: overlay;
  }
  
  a, button, input {
    color: inherit;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
`;
