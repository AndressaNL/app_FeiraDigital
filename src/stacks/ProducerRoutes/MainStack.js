import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {MainTab} from './MainTab';
import { Details } from '../../screens/Details';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator initialRouteName="MainTab" screenOptions={screenOptions}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
const screenOptions = {
  headerShown: false,
};
