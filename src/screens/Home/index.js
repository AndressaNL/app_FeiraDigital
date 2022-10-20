import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import COLORS from "../../consts/colors";
import plants from "../../consts/plants";

const {width} = Dimensions.get('window');


const Card = ({plant}) => {

    const navigation = useNavigation();
    
    return (
        
    <TouchableOpacity  onPress={()=>navigation.navigate("Details",plant)}>
    <View style={{ borderRadius:10,marginHorizontal:2,marginBottom:5,padding:15, height:200, backgroundColor: COLORS.green, width: width/2-15, }}>
        <View style={{height:100, alignItems: 'center'}}>
            <Image 
            style={{flex:1, resizeMode: 'contain'}} 
            source={plant.img} 
            />
        </View>
        <Text style={{fontWeight:'bold', fontSize:17, marginTop:10,  }}>{plant.name}</Text>
        <View 
        style={{
            flexDirection: "row", 
            justifyContent: "space-between",
            marginTop: 5,
            
        }}>
         <Text style={{fontWeight:'bold', fontSize:15, marginTop:10 }}>${plant.price}</Text>
         <Text style={{fontWeight: 'bold', fontSize:15, marginTop:10 }}>{plant.about}</Text>
         <View style={{
            height:30,
            width:30,
            backgroundColor: '#019972',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
         }}>
            <Text style={{fontSize:20, fontWeight: 'bold', color: COLORS.white}}>+</Text>
         </View>
        </View>
    </View>
    </TouchableOpacity>
    );
};
const Home = ({}) => {
    return (
        <Container>
            <ScrollView
                nestedScrollEnabled={true} style={{ width: "100%" }}  
                scrollEventThrottle={16}
            >
                <SafeAreaView style={{ flex: 1 , paddingTop: 20}}>
                    <Text style={{fontSize: 16, fontWeight: '700', paddingHorizontal: 15, color: '#343F4B'}}>
                        Destaques
                    </Text>
                    <View style={{ height: 130, marginTop: 10}}>
                        <ScrollView
                            snapToAlignment={'start'}
                            horizontal={true}
                            showsHorizontalScrollIndicator= {false}
                            scrollEventThrottle={16}
                            decelerationRate="fast"
                        >
                            <View style={{height: 120,height: 120, paddingLeft: 15}}>
                                <View style={{flex:2}}>
                                    <Image source={require
                                        ('../../assets/slider1.jpeg')}
                                        style={{flex:1, width: width * 0.7 -20, height: width / 9, marginBottom: 10, borderRadius: 12, resizeMode: 'cover'}}
                                        />
                                </View>
                            </View>
                            <View style={{height: 120,height: 120, paddingHorizontal: 5}}>
                                <View style={{flex:2}}>
                                    <Image source={require
                                        ('../../assets/slider2.jpeg')}
                                        style={{flex:1, width: width * 0.8 -20, height: width / 9, marginBottom: 10, borderRadius: 12, resizeMode: 'cover'}}
                                        />
                                </View>
                            </View>
                            <View style={{height: 120,height: 120, paddingHorizontal: 5, paddingRight:15}}>
                                <View style={{flex:2}}>
                                    <Image source={require
                                        ('../../assets/slider3.jpeg')}
                                        style={{flex:1, width: width * 0.7 -20, height: width / 9, marginBottom: 10, borderRadius: 12, resizeMode: 'cover'}}
                                        />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={{fontSize: 16, fontWeight: '700', paddingHorizontal: 15, color: '#343F4B'}}>
                        Frutas, Verduras e Legumes
                    </Text>

                    <View style={{marginLeft:15, marginTop:10, marginRight:15}}>
                    <ScrollView horizontal={true} style={{ width: "100%" }}>
                     <FlatList 
                       columnWrapperStyle={{justifyContent: 'space-between'}}  
                       numColumns={2} 
                       contentContainerStyle={{
                          marginTop: 10,
                          paddingBottom: 50,  
                       }}
                       data={plants} 
                       renderItem={({item}) => <Card plant={item} />}
                     />
                     </ScrollView>
                    </View>
                </SafeAreaView>
            </ScrollView>           
        </Container>
    );
}

export default Home