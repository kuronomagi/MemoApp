import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import LoginScreen from './src/screens/LoginScreen'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 68,
  },
});
