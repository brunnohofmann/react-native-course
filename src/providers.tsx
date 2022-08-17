import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ReactNavigationTheme from './config/themes/navigationCustomTheme';
import {themes as StyledComponentsThemes} from './config/themes/styledComponentCustomTheme';
import {ThemeProvider} from 'styled-components/native';
import AuthContext from './context/AuthContext';
import MainNavigator from './navigators/MainNavigator';

const Providers = () => {
  const theme = StyledComponentsThemes[useColorScheme() || 'light'];

  return (
    <AuthContext>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={ReactNavigationTheme}>
          <MainNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </AuthContext>
  );
};

export default Providers;
