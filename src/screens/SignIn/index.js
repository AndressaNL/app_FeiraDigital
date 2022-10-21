import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';

import {
  Container,
  CustomButton,
  CustomButtonText,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

import SignInput from '../../components/SignInput';
import SignInput2 from '../../components/SignInput2';

export function SignIn() {
  const navigation = useNavigation();

  const handleSignClick = () => {
    navigation.reset({
      routes: [{name: 'MainTab'}],
    });
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
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
        <SignInput />
        <SignInput2 />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}
