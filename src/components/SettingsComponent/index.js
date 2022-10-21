import React from "react";
import {View, Text, Container, Touchable} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import colors from '../../assets/colors'

 
const SettingsComponent = ({settingsOptions}) => {
    return (
        <ScrollView style={{backgroundColor: colors.white}}>
             {settingsOptions.map(({title, subTitle, onPress}, index) => (
             <TouchableOpacity key={title}>
                <View
                style={{
                    paddingHorizontal: 20,
                    paddingBottom: 20,
                    paddingTop: 20,
                }}>
                    <Text style={{fontSize: 17}}>{title}</Text>
                    {subTitle && <Text style={{fontSize: 14, opacity: 0.5, color:colors.grey, paddingTop: 5}}>{subTitle}</Text>}
                </View>
                <View style={{height: 1.0, backgroundColor:colors.grey}}/>
             </TouchableOpacity>
                ))}
        </ScrollView>
    );
};

export default SettingsComponent;