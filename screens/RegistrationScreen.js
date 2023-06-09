import React, { useState, useCallback  } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    // Platform,
    // KeyboardAvoidingView,
    Keyboard
} from 'react-native';


const initialState = {
    login: '',
    email: '',
    passWord: ''
}

export default function RegistrationScreen() {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [fontsLoaded] = useFonts({
        'Roboto-Medium': require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
        'Roboto-Regular': require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
        'Roboto-Black':require("../assets/fonts/Roboto/Roboto-Black.ttf"),
    });
    const [state, onChangeState] = useState(initialState);


    const keyboardHidden = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);

        onChangeState(initialState);
    }
    const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
    if (!fontsLoaded) {
         return null;
    }

    return (
        <View style={styles.forma} onLayout={onLayoutRootView}>
            <Text style={styles.title} >Реєстрація</Text>
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
            <Text >Вже є акаунт? Увійти</Text>
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
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 16,
        fontFamily: 'Roboto-Medium'
    },
    forma: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center',
        padding: 16,
        color: '#212121',
        fontFamily: 'Roboto-Regular'
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
        color: '#FFFFFF',
    }
});
