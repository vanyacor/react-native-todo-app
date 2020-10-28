import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './components/Navbar';
import { THEME } from './theme';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext);

    return (
        <View style={styles.mainWrapper}>
            <Navbar title='Todo App' />
            <View style={styles.container}>
                {todoId ? <TodoScreen /> : <MainScreen />}
            </View>
            <StatusBar style="auto" />
        </View>
    )
}


const styles = StyleSheet.create({

    mainWrapper: {
        flex: 1
    },
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
        flex: 1
    },
});