import React from "react";
import { Image } from "react-native";
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

import SignInput from "../../components/SignInput";
import SignInput2 from "../../components/SignInput2";
import SignInput1 from "../../components/SignInput1";

export default () => {
    const navigation = useNavigation();

    const handleSignClick = () =>{
        navigation.reset({
            routes: [{name: 'MainTab'}]
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
                <SignInput1/>
                <SignInput />
                <SignInput2 />

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