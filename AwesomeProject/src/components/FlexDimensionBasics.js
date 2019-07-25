import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexDimensionBasics extends Component {
    render() {
        return (
            <View style = {{flex : 1, width : '100%', flexDirection: 'row'}}>
                <View style = {{flex : 2, backgroundColor : 'red'}} />
                <View style = {{flex : 1,  backgroundColor : 'green'}} />  
                <View style = {{flex : 3, backgroundColor : 'white'}} />
                <View style = {{flex : 4, backgroundColor : 'blue'}} />     
                
            </View>
        )
    }
}