import {Component} from "react";
import {Navigator} from 'react-native-deprecated-custom-components'
import LoginPage from '../login'
import React from "react";

export default class App extends Component{
    render(){
        return(
            <Navigator
                style={{flex: 1}}
                initialRoute = {{id:'LoginPage',component:LoginPage}}
                configureScene = { this.configureScene }
                renderScene = { this.renderScene }
            />
        );
    }
    //场景转换动画配置
    configureScene(route,routeStack){
        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }
    // renderScene: 渲染场景，读取initialRouter传来的数据，确定显示那些内容。
    renderScene(route,navigator){
        return <route.component {...route.passProps} navigator = { navigator } />
    }
}