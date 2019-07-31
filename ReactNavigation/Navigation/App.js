import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { createStackNavigator, RouteConfigs,BottomTabNavigatorConfig, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import SettingScreen from './src/screens/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';



// const AppNavigator = createStackNavigator ({
//   Home : {
//     screen : HomeScreen
//   },
//   Detail : {
//     screen : DetailScreen
//   },
//   Setting : {
//     screen : SettingScreen
//   }
// });

const defaultNavigationOptions = {
  headerTintColor : 'white',
  tabBarOptions : {
    activeTintColor : 'tomato',
    inactiveTintColor : 'black',

    labelStyle : {
      fontSize : 16,
    },
  },
};

const TabNavigator = createBottomTabNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions: {
      title : '홈',
      tabBarIcon : (
        <Ionicons name = "ios-home" size = {20} color = "gray"/>
    ),
    }
  },
  Setting : {
    screen : SettingScreen
  }
},
{ 
  defaultNavigationOptions
})
// const AppContainer = createAppContainer(AppNavigator);
const AppContainer = createAppContainer(TabNavigator);

export default function App() {
  
  return (
    
    <AppContainer></AppContainer>
    
    
  );
}

