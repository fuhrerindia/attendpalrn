import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import constants from '../constants';
import User from './user';

export default React.memo(function DrawerContentComp(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={css.header}>
                <User style={css.userbox} />
            </View>
            <View style={css.content}>
                {
                    props.state.routes.map((item, index) => {
                        return (
                            <React.Fragment key={item.name}>
                                {index === 2 ? (
                                    <View style={css.labeltext}>
                                        <Text style={css.labelTextComp}>Settings</Text>
                                    </View>
                                ) : null}
                                <TouchableNativeFeedback onPress={() => props.navigation.navigate(item)} style={css.btn}>
                                    <View style={[css.button, props.state.index === index ? css.active : css.inactive]}>
                                        <Text style={css.text}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </React.Fragment>
                        );
                    })
                }
            </View>
        </DrawerContentScrollView>
    );
});

const css = StyleSheet.create({
    header: {
        width: '100%',
        paddingVertical: 60,
        alignItems: 'center'
    },
    userbox: {
        marginLeft: -20,
    },
    button: {
        width: '92%',
        backgroundColor: constants.colors.silver,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8
    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    text: {
        color: constants.colors.textWhite
    },
    active: {
        backgroundColor: constants.colors.teal.bottom,
    },
    labeltext: {
        width: '92%',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        marginTop: 31,
        marginBottom: 10,
    },
    labelTextComp: {
        color: constants.colors.textWhite,
        fontWeight: 'bold'
    },
    btn: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 8,
    },
});