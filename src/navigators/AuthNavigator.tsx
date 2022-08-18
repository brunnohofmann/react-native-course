import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import {SignUp} from '../screens/Auth/SignUp';

type AuthContextScreenType = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

const {Screen, Navigator} = createStackNavigator<AuthContextScreenType>();

const MainNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="SignUpScreen" component={SignUp} />
    </Navigator>
  );
};

export default MainNavigator;
