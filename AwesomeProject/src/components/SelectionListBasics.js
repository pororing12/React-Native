import React, {Component} from 'react';
import {SectionList, View, Text,StyleSheet} from 'react-native';

export default class SelectionListBasics extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <SectionList
                sections = {[
                    {title : 'D', data : ['Devin']},
                    {title : 'J', data : ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                renderItem = {({item}) => <Text style = {styles.item}>{item}</Text>}
                renderSectionHeader = {
                    ({section}) => <Text style = {styles.sectionHeader}>{section.title}</Text>
                }
                keyExtractor = {(item, index) => index}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        fontSize : 15,
        marginTop : 20,
        marginRight : 300
    },
    sectionHeader : {
        backgroundColor : '#EAEAEA',
    }
})