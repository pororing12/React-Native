import React, {Component} from 'react';
import {View, Text, StyleSheet}  from 'react-native';
import { storeUrl } from 'expo/build/StoreReview/StoreReview';

export default class StyleApp extends Component{
    render() {
        return (
            <View>
                <Text style = {{color : 'red'}}>just red</Text>
                <Text style = {styles.bigblue}> just bigblue </Text>
                <Text style = {[styles.bigblue, styles.red]}> bigblue, then red</Text>
                <Text style = {[styles.red, styles.bigblue]}> red, the bigblue</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigblue : {
        flex : 1,
        color : 'blue',
        fontWeight: 'bold',
        fontSize : 30,
    },
    red : {
        color : 'red',

    },
});