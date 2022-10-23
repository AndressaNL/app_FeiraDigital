import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import COLORS from '../../consts/colors';
import { FlatList } from 'react-native-gesture-handler';
import produtores from '../../consts/produtores';

export function Notifications() {

  const CartCard = ({produtores}) =>{

    return <View style={{
      height: 100,
      elevation: 15,
      borderRadius: 10,
      backgroundColor: '#DFEDE9',
      marginVertical: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <Image source={produtores.img} style={{height:80, width:80}}/>
      <View style={{height:100, marginLeft:10, paddingVertical:20,flex: 1,}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, }}>{produtores.name}</Text>
        <Text style={{ fontSize: 14,}}>{produtores.about}</Text>
      </View>
    </View>
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex:1}}>
    <FlatList 
     showsHorizontalScrollIndicator={false} 
     contentContainerStyle={{paddingBottom: 80,}}
     data={produtores}
     renderItem={({item}) => <CartCard produtores={item}/>}
     ListFooterComponentStyle={{paddingHorizontal:20 , marginTop: 10}}
     ListFooterComponent={()=>(<View>
     </View>)}
     />
    </SafeAreaView>
  );
};
