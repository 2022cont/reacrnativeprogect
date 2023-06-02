import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Platform } from 'react-native';

export default function RegistrationScreen() {
    const [textLogin, onChangeTextLogin] = React.useState('');
    const [textEmail, onChangeTextEmail] = React.useState('');
    const [textPassWord, onChangeTextPassWord] = React.useState('');
    console.log(Platform.OS);
    return (
        <View style={styles.forma}>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.input}
                onChangeText={onChangeTextLogin}
                placeholder='Логін'
                value={textLogin} />
            <TextInput style={styles.input}
                onChangeText={onChangeTextEmail}
                placeholder='Адреса електронної пошти'
                value={textEmail}
                autoComplete='email' />
            <TextInput style={styles.input}
                onChangeText={onChangeTextPassWord}
                placeholder='Пароль'
                value={textPassWord}
                secureTextEntry={true} />

            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.titleButton}>Зареєстуватися</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderRadius: 8,
        height: 50,
        borderWidth: 1,
        padding: 10,
        color: '#BDBDBD',
        marginVertical: 8,
    },
    title: {
        fontWeight: 500,
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 16,
    },
    forma: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center',
        padding: 16,
        color: '#212121'
    },
    button: {
        marginTop: 35,
        borderRadius: 100,
        backgroundColor: '#FF6C00',
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleButton: {
        fontSize: 16,
        fontWeight: 400,
        color: '#FFFFFF',
    }
});
