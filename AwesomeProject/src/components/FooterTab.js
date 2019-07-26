import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Icon } from 'native-base';
import { TabNavigator} from 'react-navigation';
import FirstTab from './FirstTab'
import SecondTab from './SecondTab'
import ThirdTab from './ThirdTab'

const Router = TabNavigator({
    First: {
        screen: FirstTab,
        navigationOptions: {
            tabBarLabel: '첫번째',
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-alarm-outline' style={{color: tintColor}} />
            )
        }
    },
    Second: {
        screen: SecondTab,
        navigationOptions: {
            tabBarLabel: '두번째',
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-american-football-outline' style={{color: tintColor}} />
            )
        }
    },
    Third: {
        screen: ThirdTab,
        navigationOptions: {
            tabBarLabel: '세번째',
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-bonfire-outline' style={{color: tintColor}} />
            )
        }
    }
}, {
    initialRouteName: "First",  // 처음 보여질 탭
    tabBarPosition: 'bottom',   // 탭 위치
    swipeEnabled: true,         // Swipe 기능
    lazy: true,                 // Default 값 true, 활성화 된 탭만 렌더링 할 것인지 여부.
    tabBarOptions: {
        inactiveTintColor: '#b3b3b3',
        activeTintColor: '#000',
        showIcon: true
    }
});

export default Router;
