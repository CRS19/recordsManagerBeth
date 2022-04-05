import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {CalendarButtom} from '../../../components/Buttoms/CalendarButtom';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {CalendarActionsEnum} from '../../../constants/CalendarButtomConstants';
import {useBovinos} from './state/useBovinos';

export const Bovinos = () => {
  const {firstDataTable} = useBovinos();

  return (
    <View>
      <TopBar title="Bovinos" backIcon={true} />
      <ScrollView>
        <GeneralTitle title="Inventario y precio de Bovinos" width={1100} />
        <CalendarButtom
          calendarAction={CalendarActionsEnum.GET_COWS_INVENTORY}
        />
        <Text>JELP</Text>
        <Text>{JSON.stringify(firstDataTable, null, 3)}</Text>
        <View style={{height: 200}} />
      </ScrollView>
    </View>
  );
};
