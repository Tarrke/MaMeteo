import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

// import our Styles
import { styles } from '../Styles/Styles'

export default class About extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>A propos de l'application</Text>
                <Text style={styles.text}>lorem ipsum blablabla...</Text>
            </View>
        )
    }
}