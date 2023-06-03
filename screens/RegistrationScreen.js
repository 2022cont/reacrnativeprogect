import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';

const initialState = {
    login: '',
    email: '',
    passWord: ''
}

export default function RegistrationScreen() {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const [state, onChangeState] = useState(initialState);


    const keyboardHidden = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);

        onChangeState(initialState);
    }

    return (
        <View style={styles.forma}>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.input}
                placeholder='Логін'
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) => onChangeState((prevState) => ({ ...prevState, login: value }))}
                value={state.login}
            />
            <TextInput style={styles.input}
                placeholder='Адреса електронної пошти'
                autoComplete='email'
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) => onChangeState((prevState) => ({ ...prevState, email: value }))}
                value={state.email}
            />
            <TextInput style={styles.input}
                placeholder='Пароль'
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) => onChangeState((prevState) => ({ ...prevState, passWord: value }))}
                value={state.passWord}
            />

            <TouchableOpacity style={styles.button} activeOpacity={0.7}
                onPress={keyboardHidden}>
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
        color: '#212121',
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
