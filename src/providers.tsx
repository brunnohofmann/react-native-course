import React from 'react';
import {ViewProps} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ReactNavigationTheme from './config/themes/navigationCustomTheme';
import {theme as StyleComponentsTheme} from './config/themes/styledComponentCustomTheme';
import {ThemeProvider} from 'styled-components/native';

const Providers = ({children}: ViewProps) => {
  return (
    <ThemeProvider theme={StyleComponentsTheme}>
      <NavigationContainer theme={ReactNavigationTheme}>
        {children}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Providers;
