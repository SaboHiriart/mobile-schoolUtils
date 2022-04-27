import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Invest from '../../../assets/img/wave.png';

const LogInScreen = () => {
  return (
    <View style = {styles.container}>
      <Image 
        source={require('../../../assets/img/wave.png')}
        style = {styles.wave}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height:15
  },
});

export default LogInScreen