import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StationScreen} from '../screens/StationScreen';
import {ReproductoresScreen} from '../screens/Reproductors/ReproductoresScreen';
import {MemoizedIndividualRecords} from '../screens/IndividualRecords';
import {InventoryScreen} from '../screens/Inventory/InventoryScreen';
import {ReproductiveStatus} from '../screens/ReproductiveStatus/ReproductiveStatus';
import {GlobalProduction} from '../screens/GlobalProduction/GlobalProduction';

const StackGeneral = createStackNavigator();

export const GeneralAppStack = () => {
  return (
    <StackGeneral.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <StackGeneral.Screen name="StationScreen" component={StationScreen} />
      <StackGeneral.Screen
        name="IndividualRecords"
        component={MemoizedIndividualRecords}
      />
      <StackGeneral.Screen
        name="GlobalProduction"
        component={GlobalProduction}
      />
      <StackGeneral.Screen
        name="ReproductiveStatus"
        component={ReproductiveStatus}
      />
      <StackGeneral.Screen name="InventoryScreen" component={InventoryScreen} />
      <StackGeneral.Screen
        name="Reproductores"
        component={ReproductoresScreen}
      />
    </StackGeneral.Navigator>
  );
};
