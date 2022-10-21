import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Image, TextInput} from 'react-native';

import {
  Container,
  CustomButton,
  CustomButtonText,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

import {api} from '../../Services/Api';

export function SignUp() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignClick = async () => {
    api
      .post('/buyer', {
        name,
        email,
        password,
      })
      .then(response => {
        console.log(response.data);
        Alert.alert('Cadastro', 'Cadastro realizado com sucesso!');
      });
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
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
        <TextInput
          style={{
            backgroundColor: '#53bda2',
            width: '100%',
            height: 60,
            borderRadius: 30,
            marginBottom: 15,
            alignItems: 'center',
          }}
          placeholder="Digite seu nome"
          onChangeText={setName}
        />
        <TextInput
          style={{
            backgroundColor: '#53bda2',
            width: '100%',
            height: 60,
            borderRadius: 30,
            marginBottom: 15,
            alignItems: 'center',
          }}
          placeholder="Digite seu email"
          onChangeText={setEmail}
        />
        <TextInput
          style={{
            backgroundColor: '#53bda2',
            width: '100%',
            height: 60,
            borderRadius: 30,
            marginBottom: 15,
            alignItems: 'center',
          }}
          placeholder="Digite sua senha"
          onChangeText={setPassword}
        />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}
