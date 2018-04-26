import React, { Component } from 'react';
import {
    StatusBar,
    Text, View, Image, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class About extends React.Component{
    static navigationOptions = {
        title: '关于',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-information-circle" size={25} color={tintColor} />
        )
    };

    render() {
        return (
            <View style = { {backgroundColor:'#f4f4f4',flex:1}}>
                <StatusBar backgroundColor={'#BDBDBD'} />
                <Image
                    style = {styles.image}
                    source={ require('../img/login.jpg')}/>
                 <Text  style = {styles.text}>RN学习，测试项目</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        borderRadius: 35,
        height: 75,
        width:75,
        marginTop:80,
        alignSelf:'center'
    },
    text : {
        fontSize:16,
        marginTop:10,
        alignSelf:'center',
        fontFamily:'Georgia'
    }
});