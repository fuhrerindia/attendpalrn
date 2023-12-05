import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import constants from '../constants'
import H1 from './heading';

export default function Data({ color }) {
    const colorPointer = color === 'blue' ? constants.colors.blue : constants.colors.teal;
    const stylePointer = color === 'blue' ? styles.blue : styles.teal;
    return (
        <View>
            <LinearGradient colors={[colorPointer.top, colorPointer.bottom]} style={styles.board}>
                <H1 forcedWhite={true}>
                    90%
                </H1>
            </LinearGradient>
            <View style={[stylePointer, styles.label]}>
                <Text style={styles.leading}>
                    Attendance
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    board: {
        width: 98,
        height: 105,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    teal: {
        backgroundColor: constants.colors.teal.dark,
    },
    blue: {
        backgroundColor: constants.colors.blue.dark,
    },
    leading: {
        color: constants.colors.textWhite
    },
    label: {
        width: 98,
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    }
});