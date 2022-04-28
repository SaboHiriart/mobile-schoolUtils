import { View, Text, StyleSheet, Alert } from 'react-native'
import { Input, Icon, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import SVGWave from '../../../assets/svg/wave.svg';

const LogInScreen = (props) => {
  const [User, setUser] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const validateLoginForm = () => {
    if (User === '' || Password === '') {
      return false;
    } else {
      return true;
    }
  }

  const handleLoginClick = () => {
    if (validateLoginForm() === false) {
      Alert.alert(
        "Error en Formulario",
        "No se pueden dejar campos vacíos.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    } else {
      if(User === 'SaboHiriart' && Password === '1234'){
        navigation.navigate('Main');
      }else{
        Alert.alert(
          "Credenciales",
          "Usuario y/o contraseña no válidos. Intente de nuevo.",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      }
    }
  }

  const handleSingupClick = () => {
    navigation.navigate('Singup')
  }

  return (
    <View style={styles.container}>
      <SVGWave width={900} height={200} />
      <Text style={styles.tittle}>School Utils</Text>
      <Text style={styles.powered}>Powered by SaboHiriart</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder='Usuario'
          containerStyle={{ marginBottom: 15, }}
          leftIcon={<Icon name='person' size={24} color='black' />}
          onChangeText={newUser => setUser(newUser)}
        />
        <Input
          placeholder='Contraseña'
          leftIcon={<Icon name='lock' size={24} color='black' />}
          secureTextEntry={true}
          onChangeText={newPassword => setPassword(newPassword)}
        />
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
        onPress={handleLoginClick}
      />
      <Text style={styles.singUp}>
        ¿No tienes cuenta?
        <Text style={styles.register} onPress={handleSingupClick}> REGISTRATE</Text>
      </Text>
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