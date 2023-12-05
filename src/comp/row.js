import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Row({ justifyContent, children, margin }) {
    return (
        <View style={[css.row, { justifyContent, marginVertical:  margin }]}>
            {children}
        </View>
    )
}
const css = StyleSheet.create({
    row: {
        flexDirection: 'row',
    }
});