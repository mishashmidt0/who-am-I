import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
  }


  @font-face {
    font-family: 'Montserrat';
    src: url(/fonts/montserrat/Montserrat-Black.ttf) format('truetype');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(/fonts/montserrat/Montserrat-BlackItalic.ttf) format('truetype');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(/fonts/montserrat/Montserrat-Bold.ttf) format('truetype');
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(/fonts/montserrat/Montserrat-BoldItalic.ttf) format('truetype');
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(/fonts/montserrat/Montserrat-Italic.ttf) format('truetype');
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(/fonts/montserrat/Montserrat-Light.ttf) format('truetype');
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(/fonts/montserrat/Montserrat-Medium.ttf) format('truetype');
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(/fonts/montserrat/Montserrat-Regular.ttf) format('truetype');
    font-style: normal;
    font-weight: 400;
  }


  h1, h2, h3, h4, h5, h6, span, p, a {
  	font-family: 'Montserrat', sans-serif;
  }
`;
