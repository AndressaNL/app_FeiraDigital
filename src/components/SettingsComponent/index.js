import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import colors from '../../assets/colors';
import COLORS from '../../consts/colors';

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
            <Text style={{fontSize: 17, color: '#666'}}>{title}</Text>
            {subTitle && (
              <Text
                style={{
                  fontSize: 14,
                  opacity: 0.5,
                  paddingTop: 5,
                }}>
                {subTitle}
              </Text>
            )}
          </View>
          <View style={{height: 1.0, backgroundColor: COLORS.green}} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SettingsComponent;
