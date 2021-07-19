import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TopBar} from './src/components/TopBar';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <TopBar title="estación experimental tunshi" />
    </NavigationContainer>
  );
};

export default App;
