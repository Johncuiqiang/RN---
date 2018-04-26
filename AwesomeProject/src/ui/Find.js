import React, { Component } from 'react';
import {
    Text,ToastAndroid,
    Dimensions, StyleSheet,TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

class CustomButton extends React.Component {

    childCallback =()=>{
        this.props.parentCallback && this.props.parentCallback();
    };

    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress ={ () => this.childCallback() }>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

export default class Find extends React.Component{

    static navigationOptions = {
        title: '发现',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-thumbs-up" size={25} color={tintColor} />
        )
    };

    parentCallback = () => {
        ToastAndroid.show('回调父函数',ToastAndroid.SHORT);
    };

    render() {
        return (
            <CustomButton text = '点击回调父组件'
                          parentCallback = { this.parentCallback }
            />
        );
    }
}



const styles = StyleSheet.create({
    wrapper: {
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },

});