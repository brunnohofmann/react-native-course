import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';

type AuthContextScreenType = {
  LoginScreen: undefined;
};

const {Screen, Navigator} = createStackNavigator<AuthContextScreenType>();

const MainNavigator = () => {
  return (
    <Navigator>
      <Screen name="LoginScreen" component={LoginScreen} />
    </Navigator>
  );
};

export default MainNavigator;
