import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import logo1 from './logo1.png';

const Login = () => {
  return (
    <View style={styles.container}>
      {/*imagen del logo*/}
      {<Image source={logo1} style={styles.logo} />}

      <Text style={styles.loginTitle}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre Usuario:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre Usuario"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>¿Recuperar contraseña?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 100, 
    height: 100, 
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: 'blue', 
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Login;
