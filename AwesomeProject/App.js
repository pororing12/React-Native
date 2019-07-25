import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banana from './src/components/Banana';
import GreetingGroup from './src/components/GreetingGroup';
import BlinkApp from './src/components/BlinkApp';
import StyleApp from './src/components/StyleApp';
import Nemo from './src/components/Nemo';
import FlexDimensionBasics from './src/components/FlexDimensionBasics';
import Hello from './src/components/Hello';


export default function App() {
  return (
    <View style={styles.container}>
      {/*
      <Banana></Banana>
      <GreetingGroup></GreetingGroup>
      <BlinkApp></BlinkApp>
      <StyleApp></StyleApp>
      <Nemo></Nemo>
      <FlexDimensionBasics></FlexDimensionBasics>*/}
      <Hello sytle = {{color : 'red', fontSize : 100}}>안녕하세용</Hello>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
