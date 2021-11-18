import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {TopBar} from './src/components/TopBar';
import {StationScreen} from './src/screens/StationScreen';
import {LogIn} from './src/screens/LogIn/LogIn';
import {IndividualRecords} from './src/screens/IndividualRecords/IndividualRecords';
import {LogInStack} from './src/navigation/LogInStack';
import {applyMiddleware, createStore, Store} from 'redux';
import {reducer} from './src/store/reducer';
import thunk from 'redux-thunk';

const store: Store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden={true} />
        {/**<TopBar title="Datos Individuales" />**/}
        {/**<StationScreen />**/}
        {/**<LogIn />**/}
        {/**<IndividualRecords />**/}
        {<LogInStack />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
