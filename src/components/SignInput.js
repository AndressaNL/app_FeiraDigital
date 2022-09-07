import React, { useState } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color:#53BDA2; 
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color:#0A664D;
    margin-left: 10px;
`;

export default (onChangeText1) => {

    const [emailField, setEmailField] = useState('');

    return(
        <InputArea>
          <Image source={require("../assets/email.png")}/>
          <Input 
          placeholder="Digite seu e-mail"
          placeholderTextColor="#0A664D"
          value1= {emailField}
          onChangeText1={t=>setEmailField(t)}
          />
        </InputArea>
    );
}