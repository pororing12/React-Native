import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Greeting from './Greeting';

export default class GreetingGroup extends Component {
    render() {
        return (
            <View>
                <Greeting name = "신윤수" />
                <Greeting name = "김철수" />
                <Greeting name = "김영희" />
            </View>
        )
    }
}