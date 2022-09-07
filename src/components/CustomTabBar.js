import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const TabArea = styled.View`
    height: 60px;
    background-color: #019972;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default ({ state, navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <Image style={{opacity: state.index===0? 1 : 0.5}} source={require("../assets/Home.png")}/>
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                <Image style={{opacity: state.index===1? 1 : 0.5}} source={require("../assets/procurar.png")}/>
            </TabItem>
            <TabItem onPress={()=>goTo('Cart')}>
                <Image style={{opacity: state.index===3? 1 : 0.5}} source={require("../assets/carrinho1.png")}/>
            </TabItem>
            <TabItem onPress={()=>goTo('Requests')}>
                <Image style={{opacity: state.index===2? 1 : 0.5}} source={require("../assets/Pedidos.png")}/>
            </TabItem>
            <TabItem onPress={()=>goTo('Notifications')}>
                <Image style={{opacity: state.index===4? 1 : 0.5}} source={require("../assets/bell.png")}/>
            </TabItem>
            <TabItem onPress={()=>goTo('Settings')}>
                <Image style={{opacity: state.index===5? 1 : 0.5}} source={require("../assets/profile.png")}/>
            </TabItem>
        </TabArea>
    );
}