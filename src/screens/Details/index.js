import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import COLORS from "../../consts/colors";
import PLANTS from "../../consts/plants";
import MainTab from '../../stacks/MainTab';



const  Details = ({navigation, route}) => {
    const plant = route.params;

    const navigate = useNavigation();

    const handleSignClick = () => {
        navigate.reset({
            routes: [{name: 'MainTab'}]
        });
    } 
    return (
    <SafeAreaView
        style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={style.header}>
             <TouchableOpacity onPress={handleSignClick} >
               <Image source={require("../../assets/volta.png")}/>  
             </TouchableOpacity>
            </View>
            <View style={style.imageContainer}>
                <Image source={plant.img}  style={{resizeMode: 'contain', flex: 1}}/>
            </View>
            <View style={style.detailsContainer}>
                <View style={{marginLeft:20,
                     flexDirection:"row", 
                     alignItems: 'flex-end'
                  }}>
                 <View style={style.line}/>
                 <Text style={{fontSize: 18,fontWeight: 'bold'}}> Happy farm</Text>
                </View>
              <View style={{marginLeft:20, 
                    marginTop: 20, 
                    flexDirection:'row', 
                    justifyContent: "space-between", 
                    alignItems: 'center'  
                 }}>
                   <Text style={{fontSize: 22,fontWeight: 'bold'}}>{plant.name}</Text>
                 <View style={style.priceTag}>
                   <Text style={{ marginLeft: 15, 
                     color: COLORS.white, 
                     fontWeight: "bold",
                     fontSize: 16,
                    }}>
                    ${plant.price}
                    </Text>
                 </View>
                </View>
                <View style={{paddingHorizontal:20, marginTop: 15}}>
                    <Text style={{fontSize:20, fontWeight: "bold"}}>About</Text>
                    <Text style={{marginTop: 20, fontSize:16, lineHeight:22, }}>
                        {plant.about}
                    </Text>
                    <View style={{marginTop:20, flexDirection:"row", justifyContent: 'space-between'}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <View style={style.borderBtn}>
                                <Text style={style.borderBtnText}>-</Text>
                            </View>
                            <Text style={{fontSize:20, marginHorizontal:10, fontWeight: "bold"}}>1</Text>
                            <View style={style.borderBtn}>
                                <Text style={style.borderBtnText}>+</Text>
                            </View>
                        </View>
                        <View style={style.buyBtn}>
                            <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}> Buy</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal:20,
        marginTop:0,
        paddingTop: 20,
        paddingBottom:20,
        flexDirection: 'row',
        backgroundColor: "#019972",
        justifyContent: 'space-between',
    },
    imageContainer : {
        flex: 0.45,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    detailsContainer:{
        flex: 0.55,
        backgroundColor: COLORS.green,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
    },
    line:{
       width: 25,
       height:2,
       backgroundColor: '#343F4B', 
       marginBottom: 5,
       marginRight: 3,
    },
    priceTag:{
      backgroundColor: "#019972",
      width: 80,
      height: 40,
      borderTopLeftRadius: 25, 
      borderBottomLeftRadius: 25, 
      justifyContent: 'center',
    },
    borderBtn:{
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderBtnText:{
        fontWeight: 'bold',
        fontSize: 28,
    },
    buyBtn: {
        width:150,
        height: 50,
        backgroundColor: "#019972",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
});

export default Details;

