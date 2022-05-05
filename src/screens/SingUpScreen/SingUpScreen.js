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

  const validateSingUpForm = () => {
    if (User === '' || Password === '' || Email === '' || Name === '') {
      return false;
    } else {
      return true;
    }
  }

  const callSingUpAPI = () => {
    var data = new FormData();
    data.append("name", Name);
    data.append("username", User);
    data.append("email", Email);
    data.append("password", Password);

    var uri = "http://10.10.80.85/schoolUtilsAPI/public/users";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        if(xhttp.responseText === "1"){
          Alert.alert(
            "Registro Completado",
            "Procede a iniciar sesión en la pantalla 'LogIN'",
            [
              {
                text: "OK",
                onPress: () => navigation.navigate('Login'),
              },
            ],
          );
        }else {
          Alert.alert(
            "Registro no Completado",
            "El nombre de usuario ya esta siendo utilizado. Intenta con uno nuevo."
          );
        }
      }
    };
    xhttp.open("POST", uri, true);
    xhttp.setRequestHeader("Api-Token", "schoolutils rules");
    xhttp.send(data);
  }

  const handleSingUpClick = () => {
    callSingUpAPI();
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
        onPress={handleSingUpClick}
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
    marginBottom: 20,
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