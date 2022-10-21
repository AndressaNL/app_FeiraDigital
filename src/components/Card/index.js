import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';

import COLORS from '../../consts/colors';
const {width} = Dimensions.get('window');

export function Card({products}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', products)}>
      <View
        style={{
          borderRadius: 10,
          marginHorizontal: 2,
          marginBottom: 5,
          padding: 15,
          height: 200,
          backgroundColor: COLORS.green,
          width: width / 2 - 5,
        }}>
        <View style={{height: 100, alignItems: 'center'}}>
          <Image
            style={{flex: 1, resizeMode: 'contain'}}
            source={{uri: products.ImageProduct[0].path}}
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 17,
            marginTop: 10,
            textTransform: 'capitalize',
          }}>
          {products.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 10,
              textTransform: 'capitalize',
            }}>
            R$ {products.value}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>
            Valor/Un
          </Text>
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: '#019972',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white}}>
              +
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
