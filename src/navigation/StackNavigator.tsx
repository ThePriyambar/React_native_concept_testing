
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Define screen names and parameters
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
};

// Create Stack
const Stack = createNativeStackNavigator<RootStackParamList>();

// Stack Navigator
const StackNavigator = () => {

  return (

    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2563EB',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile Screen',
        }}
      />

    </Stack.Navigator>

  );

};

export default StackNavigator;
