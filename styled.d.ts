import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    components: {
      button: {
        primary: {
          backgroundColor: string;
          textColor: string;
        };
        secondary: {
          backgroundColor: string;
          textColor: string;
        };
      };
    };
  }
}
