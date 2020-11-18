import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Input } from 'react-native-elements';

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/bb_app_icon_o.png')}
        />
        <Text style={styles.title}>Beer Bulletins</Text>
      </View>
      <Input style={styles.input} placeholder="Username" />
      <Input
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate('TabNavigationRoutes')}
      >
        <Text style={styles.submitButtonText}>Sign in!</Text>
      </TouchableOpacity>
      <Text
        style={styles.registerTextStyle}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        New Here ? Register
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17BEBB',
  },
  title: {
    textAlign: 'center',
    color: '#2F4858',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  input: {
    padding: 10,
    margin: 20,
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
  registerTextStyle: {
    textAlign: 'center',
    color: '#2F4858',
  },
});

export default LoginScreen;
