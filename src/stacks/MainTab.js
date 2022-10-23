import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';

import {CustomTabBar} from '../components/CustomTabBar';

import {Cart} from '../screens/Cart';
import {Home} from '../screens/Home';
import {Notifications} from '../screens/Notifications';
import {Search} from '../screens/Search';
import {Settings} from '../screens/Settings';

const Tab = createBottomTabNavigator();

export function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => {
          return {
            title: 'OFairTa',
            headerRight: () => (
              <Image source={require('../assets/LOGO8.png')} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={() => {
          return {
            title: 'Busca',
            headerRight: () => (
              <Image source={require('../assets/LOGO8.png')} />
            ),
          };
        }}
      />
      <Tab.Screen 
       name="Cart"
       component={Cart} 
       options={() => {
         return {
           title: 'Carrinho',
           headerRight: () => (
             <Image source={require('../assets/LOGO8.png')} />
           ),
         };
       }}
       />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#019972',
  },
  headerTintColor: '#fff',
};
