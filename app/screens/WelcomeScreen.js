import React from 'react';
import { Text } from 'react-native-elements';
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/bb_mobile_wp.png')}
    >
      <Text h1 style={styles.header}>
        Beer Bulletins
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AuthScreen');
        }}
      >
        <View style={styles.loginButton}>
          <Text h2 style={styles.text}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    padding: 50,
    color: '#17BEBB',
    backgroundColor: '#2F4858',
  },
  background: {
    flex: 1,
    justifyContent: 'space-between',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#2F4858',
  },
  text: {
    padding: 15,
    color: '#17BEBB',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
