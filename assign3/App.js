import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import RoundButton from './Components/RoundButton';
import SquareButton from './Components/SquareButton';
import MyButton from './Components/MyButton'; 

export default function App() {
  const loginButton = {
    bgColor: '#3498db',
    textColor: '#ffffff',
    width: 220,
    height: 50,
    text: 'Login Successful',
    logo: '✔'
  };

  const dangerButton = {
    bgColor: '#e74c3c',
    textColor: '#ffffff',
    width: 220,
    height: 50,
    text: 'Danger',
    logo: '⚠',
    borderColor: '#c0392b',
    borderWidth: 3,
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=740&t=st=1720987548~exp=1720988148~hmac=eab4ac051671e5ecf037fc6b84f81e7c9f663f338d6f4fa62df51057d2889a20' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <RoundButton btnObj={loginButton} />
        <SquareButton btnObj={dangerButton} />
        <MyButton kind="primary" text="Primary Button" onPress={() => alert('Primary Button Pressed')} />
        <MyButton kind="secondary" variant="outlined" text="Secondary Button" onPress={() => alert('Secondary Button Pressed')} />
        <MyButton kind="danger" size="large" text="Danger Button" onPress={() => alert('Danger Button Pressed')} />
        <MyButton iconOnly={true} iconName="md-checkmark" onPress={() => alert('Icon Only Button Pressed')} />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  },
});