import React,{Component} from 'react';
import { View, Button, TouchableHighlight,StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '정영재'
        }
    }
    onPressButton1() {
        alert("버튼 클릭 2")
    }
    alertStateName() {
        alert(this.state.name)
    }
    render() {
        return (
            <View>
                
                <TouchableHighlight onPress = {this.onPressButton1}>  
                    <Image
                    
                        style = {styles.button}
                        source = {require('./myButton.png')}
                    />
                    
                    
                </TouchableHighlight>
                <Text>TouchableHighlight</Text>

                <TouchableOpacity onPress = {this.onPressButton1}>
                    <Image
                        style = {styles.button}
                        source = {require('./myButton.png')}
                    />
                </TouchableOpacity>
                <Text>TouchableOpacity</Text>
                {/*
                <Button onPress = {() => alert('버튼 클릭1')} title = "눌러주세요"/>

                <Button onPress = {this.onPressButton1} title = "버튼 2 클릭" color = "black"/>

                <Button onPress = {this.alertStateName.bind(this)} title = "이름보기"/>*/}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button : {
        width : 100,
        height : 100,
        backgroundColor : 'pink',
        marginTop : 30,
        
        
    }   
})


/* 컨트롤 / */