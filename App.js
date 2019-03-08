/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


/// 6196ff2b1935ae660e768e55f8c0ef29

import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

import About from './Components/About'
import Search from './Components/Search'

// import our Styles
import { styles, activeColor, inactiveColor } from './Styles/Styles'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const Tabs = createBottomTabNavigator({
    Search: {
        screen: Search,
    },
    About: {
        screen: About,
    },
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'Search',
    tabBarOptions: {
        inactiveBackgroundColor: inactiveColor,
        activeBackgroundColor: activeColor,
    },
    showLabel: false,
})

// Obligé avec react-navigation 3...
const TabsContainer = createAppContainer(Tabs);

export default class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
                <TabsContainer />
        )
    }
}
