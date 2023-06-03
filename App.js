import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Font from 'expo-font';

import RegistrationScreen from './screens/RegistrationScreen';

export default function App() {
 const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const keyboardHidden = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    }

  return (
    <TouchableWithoutFeedback onPress={keyboardHidden}>
      <View style={styles.container}>

        <ImageBackground source={require("./assets/images/photo-BG.jpg")} style={styles.image}>
          <RegistrationScreen />
        </ImageBackground>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignContent: 'center',
  }
});
