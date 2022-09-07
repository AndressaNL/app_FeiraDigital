import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Requests from '../screens/Requests';
import Cart from '../screens/Cart';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Requests" component={Requests}/>
        <Tab.Screen name="Cart" component={Cart}/>
        <Tab.Screen name="Notifications" component={Notifications}/>
        <Tab.Screen name="Settings" component={Settings}/>
    </Tab.Navigator>
)