import React, {Component} from 'react';
import { View, FlatList, Text, TouchableOpacity, Button,StyleSheet} from 'react-native';

export default class FlatListBasics extends Component {
    
    render() {
        return (
            <View>
                <FlatList
                  data = {[
                    {key : '영수', univ : '경북대학교'},                      
                    {key : '윤수', univ : '경북대학교'},
                    {key : '소희', univ : '고려대학교'},
                    {key : '영진', univ : '포스텍'},
                    {key : '보라', univ : '경북대학교'},
                    {key : '마영', univ : '경북대학교'},
                    {key : '다희', univ : '경북대학교'},
                  ]}
                renderItem = {({item}) => {
                    if (item.univ.startsWith(this.state.keyword) || this.state.keyword == ''){
                        
                   
                        return ( 
                            <TouchableOpacity onPress = {() => alert(item.key)} >
                            <Text style = {styles.container}>
                                이름 : {item.key} / 학교 : {item.univ} 
                            </Text>
                            </TouchableOpacity>
                        )
                        }
                    }
                }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        marginRight : 150,
        marginTop : 30,
        fontSize : 15, 
        
    
    }
})

