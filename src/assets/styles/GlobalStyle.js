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
  }
  
  a, button, input {
    font-family: 'Poppins', sans-serif;
  }
`;
