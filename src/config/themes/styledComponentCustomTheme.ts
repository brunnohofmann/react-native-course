// styled-components.ts
import * as styledComponents from 'styled-components/native';
import {DefaultTheme} from 'styled-components';

type Themes = {
  light: DefaultTheme;
  dark: DefaultTheme;
};

const themes: Themes = {
  light: {
    primary: '#159d98',
    secondary: '#0f6965',
    tertiary: '#bf9200',
    components: {
      button: {
        primary: {
          backgroundColor: '#bf9200',
          textColor: '#fff',
        },
        secondary: {
          backgroundColor: '#2c3e50',
          textColor: '#fff',
        },
      },
    },
  },
  dark: {
    primary: '#313131',
    secondary: '#1e1e1e',
    tertiary: '#505050',
    components: {
      button: {
        primary: {
          backgroundColor: '#505050',
          textColor: '#fff',
        },
        secondary: {
          backgroundColor: '#2c3e50',
          textColor: '#fff',
        },
      },
    },
  },
};

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultTheme>;

export {css, ThemeProvider, themes};
export default styled;
