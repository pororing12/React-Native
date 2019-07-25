import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Hello extends Component {
    render() {
        return (
            
                <Text style =  {[
                      {fontWeight : 'bold', 
                      fontSize : 40},
                      this.props.style]}>
                     {this.props.children}
                </Text>
        
        )
    }
}