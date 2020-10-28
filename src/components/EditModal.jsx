import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';


export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value);
    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error!', `Min length of the title 3 characters. Now ${title.trim().length} characters`)
        } else {
            onSave(title);
        }
    }

    const cancelHandler = () => {
        setTitle(value);
        onCancel();
    }
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder='Enter name'
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <AppButton
                            onPress={cancelHandler}
                            color={THEME.DANGER_COLOR}
                        >
                            <MaterialIcons name="cancel" size={20} color="white" />
                        </AppButton>
                    </View>
                    <View style={styles.button}>
                        <AppButton
                            onPress={saveHandler}
                            color={THEME.BLUE_COLOR}
                        >
                            <AntDesign name="save" size={20} color="white" />
                        </AppButton>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    input: {
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#057aff',
        width: '90%',
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '44%'
    }
});