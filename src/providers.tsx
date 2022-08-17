import React from 'react';
import 'react-native-gesture-handler';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ReactNavigationTheme from './config/themes/navigationCustomTheme';
import {themes as StyledComponentsThemes} from './config/themes/styledComponentCustomTheme';
import {ThemeProvider} from 'styled-components/native';
import {AuthProvider} from './context/AuthContext';
import MainNavigator from './navigators/MainNavigator';

const Providers = () => {
  const theme = StyledComponentsThemes[useColorScheme() || 'light'];

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={ReactNavigationTheme}>
          <MainNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Providers;
