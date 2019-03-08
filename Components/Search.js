import React, {Component} from 'react';
import {Text, View, Image, StatusBar, TextInput, Button} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'

// import our Components
import Results from './Results'

// import our Styles
import {styles, activeColor} from '../Styles/Styles'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            hideStatusBar: true,
            city: 'Paris'
        }
        this.submit = this.submit.bind(this)
    }

    // Options for the StackNavigation
    static navigationOptions = {
        title: 'Recherche',
    }

    submit() {
        this.props.navigation.navigate('Results', {city: this.state.city})
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={this.state.hideStatusBar} />
                <Text style={styles.title}>Ma Super App v3!!!</Text>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({city: text})}
                    style={styles.textInput}
                    value={this.state.city}
                />
                <Button title='Rechercher' onPress={this.submit} color={activeColor}/>
            </View>
        )
    }

}

const SearchStackNavigator = createStackNavigator({
    Search: {
      screen: Search
    },
    Results: {
        screen: Results
    },
}, {
    defaultNavigationOptions: {
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
    }
});
  
const SearchStackComponent = createAppContainer(SearchStackNavigator);

export default class SearchNav extends Component {
    constructor() {
        super()
    }

    // Options for the TabNavigator
    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('../icons/home-50.png')} style={styles.navBarIcon} />
        },
        tabBarLabel: () => {
            return
        },
    }

    render() {
        return(
            <SearchStackComponent />
        )
    }
}