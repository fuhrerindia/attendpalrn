import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import constants from '../constants';

export default function Screen({ children }) {
    return (
        <View style={style.background}>
            <ScrollView style={style.scroll}>
                {children}
            </ScrollView>

        </View>
    )
}
const style = StyleSheet.create({
    background: {
        backgroundColor: constants.colors.bg,
        flex: 1,
    },
    scroll: {
        flex: 1,
        padding: 31
    }
});