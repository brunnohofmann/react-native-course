// styled-components.ts
import * as styledComponents from 'styled-components/native';
import {DefaultTheme} from 'styled-components';

const theme: DefaultTheme = {};

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultTheme>;

export {css, ThemeProvider, theme};
export default styled;
