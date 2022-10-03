import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View, 
    Platform,
    Image
} from 'react-native'

class Header extends Component {
    render() {
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image style={styles.image} source={require("../../assets/Logo4.png")}/> 
            </View>
        </View>
    }
}