/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {doLogin} from './actions/Login'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
} from "react-native";
import App from "./App";


class LoginPage extends Component{

    shouldComponentUpdate(nextProps,nextState){
        if (nextProps.status === 'done' && nextProps.isSuccess){
            this.props.navigator.replace({
                id : 'App',
                component: App,
                passProps:{
                    user:nextProps.user
                }
            });
            return false;
        }
        return true;
    }

    render(){
        let tips;
        if (this.props.status === 'init')
        {
            tips = '请点击登录';
        }
        else if (this.props.status === 'doing')
        {
            tips = '正在登录...';
        }
        else if (this.props.status === 'done' && !this.props.isSuccess)
        {
            tips = '登录失败, 请重新登录';
        }
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
                <Button style = { styles.button } title={ tips }
                        onPress ={ this.handleLogin.bind(this)
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
    /**
     *  执行登录，使用this.props.dispatch(doLogin())触发action，
     *  经过reducer处理后，新的状态交还给store，store会通知视图刷新。
     *  所以shouldComponentUpdate会被调用，然后，
     *  判断登录成功则切换页面到MainPage（并携带参数user）。
     */
    handleLogin(){
        this.props.dispatch(doLogin());
    }
}

//select函数的作用是将store的状态绑定到当前组件的props中。
function select(store) {
    return {
        status: store.loginIn.status,
        isSuccess: store.loginIn.isSuccess,
        user: store.loginIn.user
    }
}
//表示LoginPage组件对store的状态感兴趣。
export default connect(select)(LoginPage);

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
