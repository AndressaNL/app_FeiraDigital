import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TextInput} from 'react-native';

import {Container, CustomButton, CustomButtonText, InputArea} from './styles';

export function Products() {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // const handleMessageButtonClick = () => {
  //   navigation.reset({
  //     routes: [{name: 'SignInProducer'}],
  //   });
  // };

  return (
    <Container>
      <Image
        width="100%"
        height="160"
        source={require('../../../assets/Logo4.png')}
      />

      <Text>Olá seja bem vindo!</Text>
      <Text>Faça o cadastro do seu produto.</Text>

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
          placeholder="Digite o nome do produto"
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
          placeholder="Digite a quantidade"
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
          placeholder="Digite o valor"
        />

        <CustomButton>
          <CustomButtonText>
            {loading === true ? 'Carregando...' : 'Cadastrar'}
          </CustomButtonText>
        </CustomButton>
      </InputArea>

      {/* <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton> */}
    </Container>
  );
}
