import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Blink from './Blink';

export default class Nemo extends Component {
    render(){
        return( 
            <View>
            <View style = {styles.blue} ><Text></Text></View>
            <View style = {styles.black}></View>
            <View style = {styles.red} ></View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    blue : {
      
        width : 50,
        height : 50,
        backgroundColor: '#0100FF'
    },

    black : {
        width : 100,
        height : 100,
        backgroundColor : '#000000'
        },

    red : {
        width : 150,
        height : 150,
        backgroundColor: 'red'
    }

})