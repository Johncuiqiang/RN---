/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import movies from '../../movies.json';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    Dimensions, StatusBar,
} from "react-native";

const { width, height } = Dimensions.get('window');
const thirdWidth = width / 3;
const imageWidth = thirdWidth - 10 * 2;
const imageHeight = imageWidth / 0.697;
const api = 'https://api.douban.com/v2/movie/in_theaters';

const MyListItem = (props) =>  {
    const { title, image } = props;
    return (
        <View style={styles.root}>
            <Image
                source={{uri: image}}
                style={styles.image}
            />
            <View style={styles.root_child}>
            <Text
                numberOfLines={1}
                style={styles.title}
            >
             {title}
            </Text>
            <Text
               numberOfLines = { 5 }
               style = { styles.content }>
                布莱特妮出生在北卡罗莱纳州的夏洛特市，并在南卡罗来纳州切斯特市长大，这里也是她渴望表演的开始。她有三个弟弟和三个妹妹，且她是由她的母亲做家庭教育。在与祖父母住在切斯特的几个月中她出演了了电影《幽灵俱乐部》。而她第一次出现在观众面前是在她家乡格林维尔的小剧场的舞台上演出各种角色。12岁时，布莱特妮开始拓展前往洛杉矶试镜电视节目中的角色，第一个突破是电影《成长的烦恼：西佛一家的归来》被选中扮演了Michelle Seaver这一角色。而她的重要角色有在2007年电影《亲亲老爸》中饰演Cara Burns，同时又出演美剧《犯罪现场调查》(CSI)第8季168集“Go To Hell”，而且还在CBS的美剧《小镇春色》(Swingtown)中出演一个定期角色。 2008年，在以Jodi Picoult的小说改编的电视电影《第十圈》中出演Trixie Stone。2009年，她在《The Alyson Stoner Project》中扮演一个DJ的小角色，还在《法律与秩序：特殊受害》的”Babes”一集中客串Tian Bernardi，一个因怀孕得到了一款协议的天主教青少年。在2010年，她CW的节目《生活意外》中主演Lux Cassidy。2010年秋，在改自Meg Cabot同名书籍的电影《Avalon High》中主演Allie Pennington。而在2011年布莱特妮会出演CW的电视剧《秘社》
            </Text>
           </View>
        </View>
    );
};

export default class App extends React.Component{
    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={25} color={tintColor} />
        )
    };
    state = {
       movies : movies.subjects,
    };
    render(){
        const { movies }  = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#BDBDBD'} />
                <FlatList
                    keyExtractor ={ item => item.id }
                    data ={ movies }
                    renderItem ={({item}) => {
                        return (
                            <MyListItem
                                title={item.title}
                                image={item.images.medium}
                            />
                        )}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: imageWidth,
        height: imageHeight,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 5,
    },
    root: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 15,
    },
    root_child: {
        flexDirection: 'column',
        marginLeft: 15,
        marginRight: 10,
    },
    content:{
        fontSize: 16,
        marginTop: 5,
        width : width * 3/5,
        fontFamily : 'Georgia'
    },
});
