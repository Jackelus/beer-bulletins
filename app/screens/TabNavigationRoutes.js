import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import BottleshopScreen from './BottleshopScreen';
import MyReviewsScreen from './MyReviewsScreen';
import ProfileScreen from './ProfileScreen';
import BeerDetailsScreen from './BeerDetailsScreen';
import ReviewDetailsScreen from './ReviewDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function homeScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BeerDetailsScreen"
        component={BeerDetailsScreen}
        options={{
          title: 'Beer Details',
        }}
      />
    </Stack.Navigator>
  );
}

function reviewScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName="MyReviewsScreen">
      <Stack.Screen
        name="MyReviewsScreen"
        component={MyReviewsScreen}
        options={{
          title: 'My Reviews',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReviewDetailsScreen"
        component={ReviewDetailsScreen}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
  );
}
//bottleshop stack
//profile stack

function TabNavigationRoutes({ props, navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="homeScreenStack"
      tabBarOptions={{
        activeTintColor: '#17BEBB',
      }}
    >
      <Tab.Screen
        name="homeScreenStack"
        component={homeScreenStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BottleshopScreen"
        component={BottleshopScreen}
        options={{
          tabBarLabel: 'Bottle Shop',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-beer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="reviewScreenStack"
        component={reviewScreenStack}
        options={{
          tabBarLabel: 'My Reviews',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-clipboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigationRoutes;
