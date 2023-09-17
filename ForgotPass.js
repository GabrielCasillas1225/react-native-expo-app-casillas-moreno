import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import logo1 from './logo1.png';

function ForgotPass() {
  return (
    <View style={styles.container}>
      {/*imagen del logo */}
      { <Image source={logo1} style={styles.logo} /> }

      <View style={styles.forgotPassTitle}>
        <Text style={styles.titleText}>Forgot Password</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
      </View>

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>Login</Text>
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
  forgotPassTitle: {
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
  sendButton: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
  },
  sendButtonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default ForgotPass;
