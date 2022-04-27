/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import LogInScreen from './src/screens/LogInScreen';

const App = () => {
  return (
    <View style={{ width: '100%', height: '100%'}}>
      <LogInScreen style={{ width: '100%', height: '100%'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default App;
