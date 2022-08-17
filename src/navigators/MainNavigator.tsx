import React from 'react';
import {useAuthContext} from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';

const MainNavigator = () => {
  const {isLoggedIn} = useAuthContext();

  if (isLoggedIn) {
    return <></>;
  }
  return <AuthNavigator />;
};

export default MainNavigator;
