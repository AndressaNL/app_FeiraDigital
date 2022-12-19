import React, {useContext, useState} from 'react';
import {Image, Text, TextInput} from 'react-native';
import { AuthContext } from '../../../contexts/AuthContext';
import { api } from '../../../Services/Api';

import {Container, CustomButton, CustomButtonText, InputArea} from './styles';

export function Products() {
  const {user} = useContext(AuthContext)
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState("");

  async function handleRegisterProduct() {
    const formData = new FormData();

    formData.append("name", name)
    formData.append("amount", amount)
    formData.append("value", value)

    const response = await api.post(`/producer/${user.id}/product`, formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    console.log(response)
  }

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
            paddingLeft: 20,
          }}
          placeholder="Digite a quantidade"
          onChangeText={setAmount}
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
          onChangeText={setValue}
        />

        <CustomButton>
          <CustomButtonText>
            {loading === true ? 'Carregando...' : 'Cadastrar'}
          </CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
}
