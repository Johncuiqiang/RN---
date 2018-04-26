/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import About from './ui/About'
import MainList from './ui/MainList'
import Find from './ui/Find'


import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

const MyTab = TabNavigator({
    Main: { screen: MainList,},
    Find: {screen: Find,},
    About: {screen: About,},
}, {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#3e9ce9',
        inactiveTintColor: '#999999',
        showIcon: true,
        style: {
            backgroundColor: '#fff'
        },
        indicatorStyle: {
            opacity: 0
        },
        tabStyle: {
            padding: 0
        }
    }
});

const App = StackNavigator({
    MyTab: {screen: MyTab},
}, {
    headerMode: 'screen',
    navigationOptions: {
            headerStyle: {
                backgroundColor: '#BDBDBD'
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 20
            },
            headerTintColor: '#fff'
        }
});

export default App;