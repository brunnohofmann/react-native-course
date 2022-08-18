import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FakittersScreen from '../screens/Home/Fakitters';

type HomeNavigatorScreenType = {
  FakittersScreen: undefined;
};

const {Navigator, Screen} = createBottomTabNavigator<HomeNavigatorScreenType>();

const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen name="FakittersScreen" component={FakittersScreen} />
    </Navigator>
  );
};

export default HomeNavigator;
