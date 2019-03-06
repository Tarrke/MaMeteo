import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';

// import our Styles
import {styles} from '../Styles/Styles'

export default class Search extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ma Super App !!!</Text>
            </View>
        )
    }

}