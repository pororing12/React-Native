import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banana from './src/components/Banana';
import GreetingGroup from './src/components/GreetingGroup';
import BlinkApp from './src/components/BlinkApp';
import StyleApp from './src/components/StyleApp';
import Nemo from './src/components/Nemo';
import FlexDimensionBasics from './src/components/FlexDimensionBasics';
import Hello from './src/components/Hello';
import BaseTextInput from './src/components/BaseTextInput';
import ButtonGroup from './src/components/ButtonGroup';
import CAR from './src/components/CAR'
import FlatListBasics from './src/components/SectionListBasics';
import SelectionListBasics from './src/components/SelectionListBasics';
import TopNav from './src/components/TopNav';
import FooterTab from './src/components/FooterTab';
import Router from '/src/components/FooterTab'


export default function App() {
  return (
    <View sytle = {{flex : 1}}>
      {/*
      <Banana></Banana>
      <GreetingGroup></GreetingGroup>
      <BlinkApp></BlinkApp>
      <StyleApp></StyleApp>
      <Nemo></Nemo>
      <FlexDimensionBasics></FlexDimensionBasics>
      <Hello sytle = {{color : 'red', fontSize : 100}}>안녕하세용</Hello>
      <BaseTextInput></BaseTextInput>
      <ButtonGroup></ButtonGroup>
       <SelectionListBasics></SelectionListBasics>
       <CAR></CAR>
       
<FlatListBasics></FlatListBasics>
<TopNav></TopNav>
<FooterTab></FooterTab>*/}
<Router/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
