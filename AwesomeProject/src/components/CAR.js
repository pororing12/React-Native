import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class CAR extends Component {
    constructor(props) {
        super(props);
        this.state = {Text};
    }
    render() {
        return (
            <View>
                <Text style = {{fontSize : 25, 
                                color : 'orange',
                                marginLeft : 70
                                }}>CAR AUCTION
                </Text>
             <View sytle = {{width : '100%', flexDirection : 'row'}}>
             
                <TextInput style = {styles.name}
                                     onChangeText = {(Text) => this.setState({Text})}
                                     placeholder = {'이름'}>
                                    
                </TextInput>
                <Ionicons name = "ios-person" size = {15} color = "gray"/>
             </View>
            <View sytle = {{width : '100%', flexDirection : 'row'}}>
                <TextInput style = {styles.email}
                                     onChangeText = {(Text) => this.setState({Text})}
                                     placeholder = {'이메일'}>
                                     
                </TextInput>
                <Ionicons name = "ios-at" size = {15} color = "gray"/> 
                <TouchableOpacity style ={styles.button} onPress = {() => alert('내용을 입력해주세요')} title = "회원가입 / 로그인">
                <Text style = {styles.text}>회원가입 / 로그인</Text></TouchableOpacity>
             </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    name : {
        height : 40, 
        marginBottom : 5,
        width : 300, 
        borderColor : 'gray',
        borderWidth : 1,
        fontSize : 10, orderWidth : 1
    }, 

    email : {
        height : 40, 
        borderWidth : 1,
        width : 300, 
        borderColor : 'gray',
        fontSize : 10, 
        orderWidth : 1
    },
    button : {
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'orange',
        width : 300,
        height : 60,
        fontSize : 15,
        fontWeight : 5,
        
    }
})
