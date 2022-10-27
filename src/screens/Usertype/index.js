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

export function Usertype() {
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

  const handleSignClickUser = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };
  const handleSignClickPr = () => {
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

      <InputArea style={{}}>
       <CustomButton onPress={handleSignClickPr}>
          {loading === true ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <CustomButtonText>Produtor</CustomButtonText>
          )}
        </CustomButton>
        </InputArea>
        <InputArea>
        <CustomButton onPress={handleSignClickUser}>
          {loading === true ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <CustomButtonText>Comprador</CustomButtonText>
          )}
        </CustomButton>
      </InputArea>
    </Container>
  );
}
