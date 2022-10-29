import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Details} from '../screens/Details';
import {Products} from '../screens/Producer/Products';
import {MainTab} from '../stacks/MainTab';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator initialRouteName="MainTab" screenOptions={screenOptions}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}
const screenOptions = {
  headerShown: false,
};
