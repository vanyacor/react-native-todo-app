import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { AppTextBold } from './ui/AppTextBold';


export const Navbar = ({ title }) => {
    return (
        <View style={{
            ...styles.navbar, ...Platform.select({
                ios: styles.navbarIos,
                android: styles.navbarAndroid,
            })
        }}>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,

    },
    navbarAndroid: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
    },
    navbarIos: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
});