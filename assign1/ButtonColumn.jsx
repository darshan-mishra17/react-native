import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import MyButton from './MyButton'; 

const ButtonColumn = () => {
  const backgroundImage = { uri: 'https://cdn.pixabay.com/photo/2021/05/17/12/42/lake-6260668_640.png'}

  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
      <View style={styles.container}>
        <MyButton kind="primary" variant="filled" size="medium" text="Primary Button" onPress={() => alert('Primary Button Pressed')} />
        <MyButton kind="secondary" variant="outlined" size="large" text="Secondary Button" onPress={() => alert('Secondary Button Pressed')} />
        <MyButton kind="danger" variant="text" size="small" text="Danger Button" onPress={() => alert('Danger Button Pressed')} />
        <MyButton iconOnly={true} iconName="md-checkmark" onPress={() => alert('Icon Button Pressed')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonColumn;