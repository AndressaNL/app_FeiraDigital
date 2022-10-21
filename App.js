import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import UserContextProvider from './src/contexts/UserContext';
import {MainStack} from './src/stacks/MainStack';

export function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}
