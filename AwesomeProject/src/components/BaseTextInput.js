import React,{Component}  from 'react';
import {View, TextInput, Text,StyleSheet} from 'react-native';

export default class BaseTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {Text : 'BaseTextInput 입니다'};
    }
    render() {
        return (
            <TextInput style = {styles.input} 
                       onChangeText = {(text) => this.setState({text})}
                       value = {this.state.text}
                       placeholder = {"입력해도"}
            />
            
        );
    }
}

const styles = StyleSheet.create({
    input : {
        height : 40, 
        width : "80%",
        borderColor : 'gray',
        fontSize : 25,
        orderWidth : 1
    }
})