import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TopBar} from './src/components/TopBar';
import {StationScreen} from './src/screens/StationScreen';
import {LogIn} from './src/screens/LogIn/LogIn';
import {IndividualRecords} from './src/screens/IndividualRecords';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      {<TopBar title="Datos Individuales" />}
      {/**<StationScreen />**/}
      {/**<LogIn />**/}
      {<IndividualRecords />}
    </NavigationContainer>
  );
};

export default App;
