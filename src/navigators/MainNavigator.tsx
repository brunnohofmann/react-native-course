import React from 'react';
import {useAuth} from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

const MainNavigator = () => {
  const {user} = useAuth();

  if (user) {
    return <HomeNavigator />;
  }

  return <AuthNavigator />;
};

export default MainNavigator;
