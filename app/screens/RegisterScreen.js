import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';

function RegisterScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Input style={styles.input} placeholder="Username" />
      <Input
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Input style={styles.input} placeholder="FirstName" />
      <Input style={styles.input} placeholder="LastName" />
      <Input style={styles.input} placeholder="Email" />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Register!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17BEBB',
  },
  input: {
    padding: 10,
    margin: 15,
    height: 10,
    backgroundColor: '#DEFBFA',
  },
  submitButton: {
    backgroundColor: '#F26419',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default RegisterScreen;
