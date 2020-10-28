import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss()
        } else {
            Alert.alert('Field is required!');
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Enter todo"
                autoCorrect={false}
            />
            <AntDesign.Button
                onPress={pressHandler}
                name="pluscircleo"
            >
                Add
            </AntDesign.Button>
            {/* <Button title="Add" onPress={pressHandler} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '78%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#057aff',
        padding: 10,
    },
});