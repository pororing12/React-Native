import React,{Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class Banana extends Component{
    render() {
        const pic = {
           uri: "https://images.kbench.com/kbench/article/2014_07/k136493p1n1.jpg"
        }
        return(
            <View>
                <Image source = {pic} style = {{width:200, height: 200}}></Image>
            </View>
        )
    }
}

