import { createGlobalStyle } from 'styled-components';

// http://chir.ag/projects/name-that-color/
export const colors = {
  caribbeanGreen: '#00D1B2',
  colorGradient: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)',
};

export default {
  primary: colors.caribbeanGreen,
  backgroundGradient:
    'linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%)',
  colorGradient: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)',
  darkBlack: '#000000',
  textColor: '#666d7a',
  textLight: '#A2A2A2',
  fontSmall: '14px',
  fontMedium: '18px',
  fontLarge: '28px',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: #000;
		margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif !important;
  }
  .title {
    background: ${colors.colorGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  button, input {
    :focus, :active {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }
`;
