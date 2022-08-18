import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FakittersScreen from '../screens/Home/Fakitters';
import OptionsScreen from '../screens/Options';
import HomeIcon from '../assets/img/home-icon.svg';
import HamburguerIcon from '../assets/img/hamburguer-icon.svg';
import {ThemeContext} from 'styled-components/native';

type HomeNavigatorScreenType = {
  FakittersScreen: undefined;
  OptionsScreen: undefined;
};

const {Navigator, Screen} = createBottomTabNavigator<HomeNavigatorScreenType>();

const HomeNavigator = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {position: 'absolute', backgroundColor: theme.primary},
      }}>
      <Screen
        options={{tabBarIcon: () => <HomeIcon fill="#ffffff" />}}
        name="FakittersScreen"
        component={FakittersScreen}
      />
      <Screen
        options={{tabBarIcon: () => <HamburguerIcon fill="#ffffff" />}}
        name="OptionsScreen"
        component={OptionsScreen}
      />
    </Navigator>
  );
};

export default HomeNavigator;
