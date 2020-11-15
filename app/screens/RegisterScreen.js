import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

function RegisterScreen(props) {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput style={styles.input} placeholder="FirstName" />
      <TextInput style={styles.input} placeholder="LastName" />
      <TextInput style={styles.input} placeholder="Email" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: '#2F4858',
    borderWidth: 1,
    backgroundColor: '#DEFBFA',
  },
});

export default RegisterScreen;