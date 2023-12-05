import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import constants from '../constants';
import { useNavigation } from '@react-navigation/native';

export default React.memo(function MenuButton() {
    const navigation = useNavigation();
    function openDrawer() {
        navigation.openDrawer();
    }
    return (
        <View style={styles.iconparent}>
            <TouchableOpacity onPress={openDrawer}>
                <Icon name='menu' style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
});
const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
        color: constants.colors.white,
    },
    iconparent: {
        marginBottom: 31,
        marginRight: 31
    },
});
