import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const SignUp = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log("Sign Up Button Clicked");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?w=740&t=st=1720987315~exp=1720987915~hmac=338f752df81e8c8f2d5aeeb62281b1faae14118bd656283e1075e87e2ea249ac' }} 
        resizeMode="cover" 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Enter your password"
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'green',
    padding: 12,
    marginEnd:20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop:14,
    
  }
});

export default SignUp;