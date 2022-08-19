import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FakittersScreen from '../screens/Home/Fakitters';
import OptionsScreen from '../screens/Options';
import {PostFakkiter} from '../screens/PostFakkiter';
import HomeIcon from '../assets/img/home-icon.svg';
import HamburguerIcon from '../assets/img/hamburguer-icon.svg';
import CreateIcon from '../assets/img/create-icon.svg';
import {ThemeContext} from 'styled-components/native';

type HomeNavigatorScreenType = {
  FakittersScreen: undefined;
  OptionsScreen: undefined;
  PostFakkiterScreen: undefined;
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
        options={{tabBarIcon: () => <CreateIcon fill="#ffffff" />}}
        name="PostFakkiterScreen"
        component={PostFakkiter}
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
