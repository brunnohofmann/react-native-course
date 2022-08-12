import React from 'react';
import {ViewProps} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ReactNavigationTheme from './config/themes/navigationCustomTheme';

const Providers = ({children}: ViewProps) => {
  return (
    <NavigationContainer theme={ReactNavigationTheme}>
      {children}
    </NavigationContainer>
  );
};

export default Providers;
