/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// 引入react-redux
import {Provider}from 'react-redux';
// 引入store文件，下步会创建;
import App from './container/App';
import configureStore from './store/config';
const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;



