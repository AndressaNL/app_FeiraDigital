import React from 'react';
import {Image, SafeAreaView, TextInput, View} from 'react-native';

import {Container} from './styles';

export function Search() {
  return (
    <Container>
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              height: 50,
              backgroundColor: '#DFEDE9',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Image
              style={{marginLeft: 10, marginRight: 10}}
              source={require('../../assets/buscar.png')}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#343F4B"
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                flex: 1,
              }}
            />
          </View>
          <View
            style={{
              marginLeft: 10,
              height: 50,
              width: 50,
              backgroundColor: '#019972',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Image source={require('../../assets/filtrar.png')} />
          </View>
        </View>
      </SafeAreaView>
    </Container>
  );
}
