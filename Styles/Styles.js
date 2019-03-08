import React from 'react'
import { StyleSheet } from 'react-native'

export const activeColor = '#f44242'
export const inactiveColor = '#ff0000'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'red',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        margin: 10,
        color: 'red',
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    navBarIcon: {
        width: 20,
        height: 20,
    },
    textInput: {
        width: '90%',
        borderWidth: 2,
        height: 40,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 20,
    },
    header: {
        backgroundColor: activeColor,
    },
    headerTitle: {
        color: '#FFFFFF'
    },
    activityIndicator: {
        marginTop: 20,
    },
    weatherRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#394163',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#203040',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    weatherFirstRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E54B64',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#203040',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    weatherTemp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22,
    },
    weatherIcon: {
        width: 60,
        height: 60,
        margin: 'auto',
    },
    bold: { fontWeight: 'bold' },
    white: { color: '#FFF' },
    bg_blue: {
        backgroundColor: 'blue',
    },
    bg_green: {
        backgroundColor: 'green',
    },
});
