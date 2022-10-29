import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Preload} from '../screens/Preload';
import {Products} from '../screens/Producer/Products';
import {SignInProducer} from '../screens/Producer/SignIn';
import {SignUpProducer} from '../screens/Producer/SignUp';
import {SignIn} from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';
import {Usertype} from '../screens/Usertype';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Preload" screenOptions={screenOptions}>
      <Stack.Screen name="Usertype" component={Usertype} />
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpProducer" component={SignUpProducer} />
      <Stack.Screen name="SignInProducer" component={SignInProducer} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}
const screenOptions = {
  headerShown: false,
};
