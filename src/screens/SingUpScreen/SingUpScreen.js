import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Icon, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import SVGWave from '../../../assets/svg/wave.svg';

const SingUpScreen = () => {
  const navigation = useNavigation();
  const [Name, setName] = React.useState('');
  const [User, setUser] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const handleLoginClick = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <SVGWave width={900} height={200} />
      <Text style={styles.tittle}>Registrate</Text>
      <Text style={styles.powered}>Powered by SaboHiriart</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder='Nombre Completo'
          containerStyle={{ marginBottom: 15, }}
          leftIcon={<Icon name='person' size={24} color='black' />}
          onChangeText={newName => setName(newName)}
        />
        <Input
          placeholder='Usuario'
          containerStyle={{ marginBottom: 15, }}
          leftIcon={<Icon name='badge' size={24} color='black' />}
          onChangeText={newUser => setUser(newUser)}
        />
        <Input
          placeholder='Correo'
          containerStyle={{ marginBottom: 15, }}
          leftIcon={<Icon name='mail' size={24} color='black' />}
          onChangeText={newEmail => setEmail(newEmail)}
        />
        <Input
          placeholder='Contraseña'
          leftIcon={<Icon name='lock' size={24} color='black' />}
          secureTextEntry={true}
          onChangeText={newPassword => setPassword(newPassword)}
        />
      </View>
      <Button
        title="Registrar"
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
      />
      <Text style={styles.singIn}>
        ¿Ya tienes cuenta?
        <Text style={styles.register} onPress={handleLoginClick}> INGRESA</Text>
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
    marginBottom:20,
  },
  tittle: {
    marginTop: -100,
    marginBottom: 5,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#000000",
    fontFamily: 'Monserrat-Medium',
  },
  powered: {
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold'
  },
  singIn: {
    marginTop: 20,
  },
  register: {
    color: '#000000',
    fontWeight: 'bold'
  }
});

export default SingUpScreen