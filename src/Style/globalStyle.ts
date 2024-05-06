import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    // colors variables

    --brand1: #0000FF;
    --brand2: #3532FF;

    --success: #36B37E;
    --error: #FF5630;
    --warning: #FFAB00;

    --grey1: #212529;
    --grey2: #495057;
    --grey3: #ADB5BD;
    --grey4: #E9ECEF;
    --grey5: #F1F3F5;
    --white: #FFFFFF;

    // fonts variables

    --title1: 1.25rem;
    --title2: 1rem
    --text1: 0.875rem;
    --text2: 0.75rem;
  } 
`;
