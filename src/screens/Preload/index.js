import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image} from 'react-native';

import {Container, LoadingIcon} from './styles';

export function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        //validar o token
      } else {
        navigation.navigate('Usertype');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <Image
        width="100%"
        height="160"
        source={require('../../assets/Logo4.png')}
      />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
}
