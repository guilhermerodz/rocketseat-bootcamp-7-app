import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to RocketShoes!</Text>
      <Text style={styles.welcome}>Under</Text>
    </View>
  );
}
