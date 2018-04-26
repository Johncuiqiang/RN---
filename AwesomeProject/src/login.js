/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './App';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
} from "react-native";

import MainPage from './App';
import LoginPage from './login';

let initialRoute = {
    name: 'login-page',
    page: LoginPage,
}

export default class Login extends React.Component{

    static navigationOptions = {
        header : null
    };
    render(){
        return (
            <View style = { {backgroundColor:'#f4f4f4',flex:1}}>
               <Image
                  style = {styles.image}
                  source={require('./img/login.jpg')}/>
               <TextInput
                   style = {styles.user_input}
                   placeholder = 'QQ号/手机号/邮箱'
                   numberOfLines = {1}
                   autoFocus = {true}
                   underlineColorAndroid = {'transparent'}
                   textAlign = 'center'/>
                <View style={{height:1,backgroundColor:'#f4f4f4'}}/>
                <TextInput
                    style={styles.pwd_input}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    textAlign='center'
                />
                <Button style = { styles.button } title="登陆" onPress = {
                    () => navigate('App')
                }/>
                <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
                    <Text style={styles.style_view_unlogin}>
                        无法登录?
                    </Text>
                    <Text style={styles.style_view_register}>
                        新用户
                    </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
  button_login:{
      marginTop:35,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#63B8FF',
      height:45,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  container: {
    flexDirection : 'row',
    padding : 20,
    margin:5,
    backgroundColor: 'blue',
    height : 100
  },
  image: {
    borderRadius: 35,
    height: 75,
    width:75,
    marginTop:80,
    alignSelf:'center'
  },
    user_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:45,
        fontSize:16
    },
    pwd_input:{
        backgroundColor:'#fff',
        height:45,
        fontSize:16
    },
    style_view_commit:{
        marginTop:35,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:45,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_unlogin:{
        fontSize:14,
        color:'#63B8FF',
        marginLeft:10,
    },
    style_view_register:{
        fontSize:14,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right',
    }
});
