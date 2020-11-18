import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import TabNavigationRoutes from './app/screens/TabNavigationRoutes';
import RegisterScreen from './app/screens/RegisterScreen';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

function AuthScreen() {
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#F26419',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </AuthStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="WelcomeScreen">
        <RootStack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="TabNavigationRoutes"
          component={TabNavigationRoutes}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
