import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import constants from '../constants';

export default React.memo(function H1({ children, style, forcedWhite }) {
    return (
        <Text style={[styles.heading, style, forcedWhite ? styles.white : styles.dynamic]}>{children}</Text>
    )
})

const styles = StyleSheet.create({
    heading: {
        fontSize: 31,
        fontWeight: 'bold',
    },
    white: {
        color: constants.colors.textWhite
    },
    dynamic: {
        color: constants.colors.white,
    }
});