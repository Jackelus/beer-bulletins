import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/bb_mobile_wp.png')}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AuthScreen');
        }}
      >
        <View style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#2F4858',
  },
  RegisterButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#33658A',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
