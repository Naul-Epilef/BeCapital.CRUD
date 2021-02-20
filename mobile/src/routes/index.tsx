import React from 'react';
import {} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/signIn';
import Welcome from '../pages/welcome';

const Auth = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        // headerShown: false,
        cardStyle: {backgroundColor: '#312e38'},
      }}
      initialRouteName="SignIn">
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="Welcome" component={Welcome} />
    </Auth.Navigator>
  );
};

export default Routes;
