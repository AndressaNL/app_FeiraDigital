import React, { useState } from "react";
import auth from '@react-native-firebase/auth';
import { Image, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
 } from './styles';


export default () => {
    const navigation = useNavigation();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const handleSignClick = () =>{

        auth()
          .createUserWithEmailAndPassword(email,password)
          .then(() => {
            console.log('User account created & signed in!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
        
            console.error(error);
          });
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    } 

    return (
        <Container>
            <Image width="100%" height="160" source={require("../../assets/Logo4.png")}/>

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
             placeholder="Digite seu e-mail"
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
    )
}