import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import logo1 from './logo1.png';

function ChangePass() {
  return (
    <View style={styles.container}>
      {/*imagen del logo */}
      { <Image source={logo1} style={styles.logo} /> }

      <View style={styles.changePassTitle}>
        <Text style={styles.titleText}>Reset Password</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nueva Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nueva Contraseña"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirmar contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
        />
      </View>

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  changePassTitle: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
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
  resetButton: {
    backgroundColor: 'blue', 
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangePass;
