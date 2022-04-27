import { View, Text, StyleSheet, Alert} from 'react-native'
import { Input, Icon, Button } from '@rneui/themed';
import React from 'react'
import SVGWave from '../../../assets/svg/wave.svg';

const LogInScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
    <View style={styles.container}>
      <SVGWave width={900} height={200} />
      <Text style={styles.tittle}>TUM MOBILE</Text>
      <Text style={styles.powered}>Powered by SaboHiriart</Text>
      <View style={styles.inputContainer}>
        <Input placeholder='Usuario' containerStyle={{ marginBottom: 15, }} leftIcon={
          <Icon name='person' size={24} color='black' />
        }
        />
        <Input placeholder='Contraseña' leftIcon={
          <Icon name='lock' size={24} color='black' />
        }
          secureTextEntry={true} />
      </View>

      <Button
        title="LOG IN"
        buttonStyle={{
          backgroundColor: '#000B76',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 300,
          marginHorizontal: 0,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={createTwoButtonAlert}
      />
      <Text style={styles.singUp}>¿No tienes cuenta? <Text style={styles.register}>REGISTRATE</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: 300,
    marginBottom: 50,
  },
  tittle: {
    marginTop: -60,
    marginBottom: 5,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#000000",
    fontFamily: 'Monserrat-Medium',
  },
  powered: {
    marginBottom: 90,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold'
  },
  singUp: {
    marginTop: 100,
  },
  register: {
    color: '#000000',
    fontWeight: 'bold'
  }
});

export default LogInScreen