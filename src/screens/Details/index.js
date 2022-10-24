import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Tomate from '../../assets/Tomate.png';
import COLORS from '../../consts/colors';

export function Details({navigation, route}) {
  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  const [addProducts, setAddProducts] = useState(1);

  const handleAddProducts = () => {
    setAddProducts(addProducts + 1);
  };

  const handleRemoveProducts = () => {
    setAddProducts(addProducts - 1);
  };

  const plant = route.params;

  const navigate = useNavigation();

  const handleSignClick = () => {
    navigate.reset({
      routes: [{name: 'MainTab'}],
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <TouchableOpacity onPress={handleSignClick}>
          <Image source={require('../../assets/volta.png')} />
        </TouchableOpacity>
      </View>
      <View style={style.imageContainer}>
        <Image source={Tomate} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={style.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#343F4B'}}>
            {' '}
            Happy farm
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              textTransform: 'capitalize',
              color: '#343F4B',
            }}>
            {plant.name}
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
                color: '#fff',
              }}>
              ${plant.value}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 15}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#343F4B'}}>
            About
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              lineHeight: 22,
              color: '#343F4B',
            }}>
            {plant.about} Valor por unidade
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={style.borderBtn}>
                <Text
                  style={style.borderBtnText}
                  onPress={handleRemoveProducts}>
                  -
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                  color: '#343F4B',
                }}>
                {addProducts}
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText} onPress={handleAddProducts}>
                  +
                </Text>
              </View>
            </View>
            <View style={style.buyBtn}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}
                onPress={() => goTo('Cart')}>
                Adicionar
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 0,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    backgroundColor: '#019972',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#DFEDE9',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: '#343F4B',
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: '#019972',
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#343F4B',
  },
  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor: '#019972',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
