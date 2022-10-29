import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, Image} from 'react-native';

import {Container, CustomButton, CustomButtonText, InputArea} from './styles';

export function Usertype() {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignClickUser = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };
  const handleSignClickProducer = () => {
    navigation.reset({
      routes: [{name: 'SignInProducer'}],
    });
  };

  return (
    <Container>
      <Image
        width="100%"
        height="160"
        source={require('../../assets/Logo4.png')}
      />

      <InputArea>
        <CustomButton onPress={handleSignClickProducer}>
          {loading === true ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <CustomButtonText>Sou Produtor</CustomButtonText>
          )}
        </CustomButton>
      </InputArea>
      <InputArea>
        <CustomButton onPress={handleSignClickUser}>
          {loading === true ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <CustomButtonText>Sou Comprador</CustomButtonText>
          )}
        </CustomButton>
      </InputArea>
    </Container>
  );
}
