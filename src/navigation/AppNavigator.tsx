import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNames } from './types';
import LandingScreen from '../screens/Landing/LandingScreen';
import MusicScreen from '../screens/Music/MusicScreen';
import { RootStackParamList } from './Routes';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.LandingScreen}>
        <Stack.Screen
          name={ScreenNames.LandingScreen}
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.MusicScreen}
          component={MusicScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
