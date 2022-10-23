import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {ActivityIndicator, Alert, Image, TextInput} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';

import {
  Container,
  CustomButton,
  CustomButtonText,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

export function SignIn() {
  const {signIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignClick = async () => {
    setLoading(true);
    if (email === '' || password === '') {
      Alert.alert('Login', 'Por favor preencha todos os dados');
      setLoading(false);
    } else {
      await signIn({email, password});
      setLoading(false);
    }
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
        <TextInput
          style={{
            backgroundColor: '#53bda2',
            width: '100%',
            height: 60,
            borderRadius: 30,
            marginBottom: 15,
            alignItems: 'center',
            paddingLeft: 20,
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
            paddingLeft: 20,
          }}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          onChangeText={setPassword}
        />

        <CustomButton onPress={handleSignClick}>
          {loading === true ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <CustomButtonText>LOGIN</CustomButtonText>
          )}
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
