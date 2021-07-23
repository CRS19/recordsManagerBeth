import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TopBar} from './src/components/TopBar';
import {StationScreen} from './src/screens/StationScreen';
import {LogIn} from './src/screens/LogIn/LogIn';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      {/**<TopBar title="estación experimental tunshi" />**/}
      {/**<StationScreen />**/}
      <LogIn />
    </NavigationContainer>
  );
};

export default App;
