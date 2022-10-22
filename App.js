import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthProvider} from './src/contexts/AuthContext';

import UserContextProvider from './src/contexts/UserContext';
import {Routes} from './src/stacks/index';

export function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </UserContextProvider>
  );
}
