import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

const homeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      >Hola mundo</Button>
    );
  };


export default homeScreen;