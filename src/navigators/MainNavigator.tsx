import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAuth} from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';

const MainNavigator = () => {
  const {user, signOut} = useAuth();

  if (user) {
    return (
      <View>
        <Text>User is logged in</Text>
        <Button title="logout" onPress={signOut} />
      </View>
    );
  }

  return <AuthNavigator />;
};

export default MainNavigator;
