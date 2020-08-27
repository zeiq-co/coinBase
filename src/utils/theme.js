import { createGlobalStyle } from 'styled-components';

// http://chir.ag/projects/name-that-color/
export const colors = {
  caribbeanGreen: '#00ece2',
};

export default {
  primaryColor: '#110642',
  secondaryColor: colors.caribbeanGreen,
  mainBrandColor: '#1b0a5f',
  lightAccent: '#120641',
  gradientPrimary:
    'linear-gradient(to right, rgb(205, 69, 255), rgb(115, 104, 255));',
  gradientSecondary:
    'linear-gradient(to right, rgb(0, 136, 254), rgb(38, 215, 212))',
  darkBlack: '#000000',
  textColor: '#666d7a',
  textLight: '#A2A2A2',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: #110642;
		margin: 0;
    padding: 0;
    font-family: 'Exo 2', sans-serif !important;
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
