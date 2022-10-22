import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Preload} from '../screens/Preload';
import {SignIn} from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Preload" screenOptions={screenOptions}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
const screenOptions = {
  headerShown: false,
};
