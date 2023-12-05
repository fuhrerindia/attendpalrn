import React from 'react';
import constants from '../constants';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserBlock = ({ style }) => {
    return (
        <View style={[styles.row, styles.verticleCentre, style]}>
            <View style={styles.profile}></View>
            <View style={styles.cred}>
                <Text style={styles.heading}>Paurush Sinha</Text>
                <View style={[styles.row, styles.verticleCentre]}>
                    <Icon name='bank' />
                    <Text style={styles.orgname}>Tecnia, GGSIPU</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: constants.colors.grey
    },
    row: {
        flexDirection: 'row'
    },
    verticleCentre: {
        alignItems: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: constants.colors.white,
    },
    cred: {
        marginLeft: 11,
    },
    orgname: {
        marginLeft: 4
    }
})

export default React.memo(UserBlock);
