import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment'
import 'moment/locale/fr'

moment.locale('fr')

// import our Styles
import { styles, activeColor } from '../Styles/Styles'

export default class WeatherRow extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        day: PropTypes.object,
        index: PropTypes.number,
    }

    icon(size = 60) {
        let type = this.props.day.weather[0].main
        return (
            <Image source={require('../icons/01d.png')} style={{width: size, height: size}} />
        )
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[styles.bold, styles.white]}>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM HH[h]')
        return (
            <Text style={styles.white}>{day}</Text>
        )
    }

    render() {
        if (this.props.index === 0) {
            return (
                <View style={[styles.weatherFirstRow]}>
                    <View>
                        <Text>{this.day()} {this.date()}</Text>
                        {this.icon(90)}
                    </View>
                    <Text style={styles.weatherTemp}>{this.props.day.main.temp}°C</Text>
                </View>
            )
        } else {
            return (
                <View style={[styles.weatherRow]}>
                {this.icon()}
                    <Text >{this.day()} {this.date()}</Text>
                    <Text style={styles.weatherTemp}>{this.props.day.main.temp}°C</Text>
                </View>
            )
        }
    }
}