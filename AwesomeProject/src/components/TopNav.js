import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TopNav extends Component {
    render(){
        return (
            <View style = {styles.body} >
                
                <Text style = {styles.title}>My Cars</Text>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    title : {
        color : 'black',
        fontSize : 20,
        marginTop : 50,
        alignContent : 'center',
        justifyContent : 'center'

    },
    body : {
        backgroundColor : 'orange',
        flexDirection : 'column',
        
    }
})