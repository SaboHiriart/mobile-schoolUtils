/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import LogInScreen from './src/screens/LogInScreen';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hola Mundo en React Native</Text>
      <LogInScreen />
    </SafeAreaView>
  );
};

export default App;
