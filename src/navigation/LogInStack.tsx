import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoadingScreen} from '../screens/LoadingScreen';
import {LogIn} from '../screens/LogIn/LogIn';
import {DrawerNavigator} from './DrawerNavigator';
import {TabNavigatorCow} from './TabNavigatorCow';
import {Text, View} from 'react-native';

const Stack = createStackNavigator();

export const LogInStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="LoginScreen" component={LogIn} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="TabNavigatorCow" component={TabNavigatorCow} />
    </Stack.Navigator>
  );
};
