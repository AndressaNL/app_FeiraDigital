import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Details from "../screens/Details";
import MainTab from "../stacks/MainTab";


const Stack = createNativeStackNavigator();

export default props => {
    return(
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={screenOptions}
         >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
    )
}
const screenOptions = {
    headerShown: false,
}

