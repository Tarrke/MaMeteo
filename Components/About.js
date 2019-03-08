import React, { Component } from 'react';
import { Image, Text, View, StatusBar, Button } from 'react-native';

// import our Styles
import { styles, activeColor } from '../Styles/Styles'

export default class About extends Component {
    constructor() {
        super()
        this.state = {
            hideStatusBar: true,
        }
        this.handleButtonPress = this.handleButtonPress.bind(this)
    }

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('../icons/about-32.png')} style={styles.navBarIcon} />
        },
        tabBarLabel: () => {
            return
        },
    }

    handleButtonPress() {
        this.props.navigation.navigate('Search')
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={this.state.hideStatusBar} />
                <Text style={styles.title}>A propos de l'application</Text>
                <Text style={styles.text}>lorem ipsum blablabla...</Text>
                <Button title='Initier une recherche' onPress={this.handleButtonPress} color={activeColor}/>
            </View>
        )
    }
}