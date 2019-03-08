import React, { Component } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';

import Axios from 'axios'

// import out components
import WeatherRow from './WeatherRow'

// import our Styles
import { styles, activeColor } from '../Styles/Styles'

export default class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city,
            data: null,
        }
        this.getWeather()
    }

    getWeather() {
        Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&appid=6196ff2b1935ae660e768e55f8c0ef29`)
            .then((response) => {
                this.setState({ data: response.data })
            })
    }

    static navigationOptions = (props) => {
        return {
            title: `Météo de ${props.navigation.state.params.city}`,
        }
    }

    _keyExtractor = (item, index) => index;

    render() {
        if (this.state.data === null) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator
                        color={activeColor}
                        size="large"
                        style={styles.activityIndicator}
                    />
                </View>
            )
        } else {
            return (
                <FlatList
                    data={this.state.data.list}
                    renderItem={({ item, index }) => <WeatherRow day={item} index={index} />}
                />
            )
        }
    }
}