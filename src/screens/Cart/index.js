import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';
import plants from '../../consts/plants';

export function Cart() {
  const CartCard = ({plants}) => {
    return (
      <View
        style={{
          height: 100,
          elevation: 15,
          borderRadius: 10,
          backgroundColor: '#DFEDE9',
          marginVertical: 10,
          marginHorizontal: 20,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={plants.img} style={{height: 80, width: 80}} />
        <View
          style={{height: 100, marginLeft: 10, paddingVertical: 20, flex: 1}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#343F4B'}}>
            {plants.name}
          </Text>
          <Text style={{fontSize: 13, color: '#343F4B'}}>{plants.about}</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#343F4B'}}>
            R${plants.price}
          </Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#343F4B'}}>
            1
          </Text>
          <View
            style={{
              width: 80,
              height: 30,
              backgroundColor: '#019972',
              borderRadius: 30,
              paddingHorizontal: 5,
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                color: COLORS.white,
                paddingRight: 20,
              }}>
              -
            </Text>
            <Text
              style={{fontWeight: 'bold', fontSize: 24, color: COLORS.white}}>
              +
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={plants}
        renderItem={({item}) => <CartCard plants={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 10}}
        ListFooterComponent={() => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#343F4B'}}>
                Total da compra{' '}
              </Text>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#343F4B'}}>
                R$20
              </Text>
            </View>
            <View
              style={{
                width: 370,
                height: 50,
                backgroundColor: '#019972',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
              }}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Comprar pelo WhatsApp
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
