import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GetStarted from './components/GetStarted';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('GetStarted');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  let ScreenComponent;
  switch (currentScreen) {
    case 'SignUp':
      ScreenComponent = <SignUp navigate={navigate} />;
      break;
    case 'Login':
      ScreenComponent = <Login navigate={navigate} />;
      break;
    default:
      ScreenComponent = <GetStarted navigate={navigate} />;
  }

  return <View style={styles.container}>{ScreenComponent}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;