import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {CalendarButtom} from '../../../components/Buttoms/CalendarButtom';
import {InventoryCowFirstTable} from '../../../components/Tables/InventarioBovino/InventoryCowFirstTable';
import {InventoryCowSecondTable} from '../../../components/Tables/InventarioBovino/InventoryCowSecondTable';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {CalendarActionsEnum} from '../../../constants/CalendarButtomConstants';
import {useBovinos} from './state/useBovinos';

import {LabelHead} from '../../../components/Tables/InventarioBovino/inventorySecordTableHead/LabelHead';
import {LoadingModal} from '../../../components/Modals/LoadingModal';

export const Bovinos = () => {
  const {firstDataTable, secondTableData, isLoading} = useBovinos();

  return (
    <View>
      <TopBar title="Bovinos" backIcon={true} />
      <ScrollView horizontal={true}>
        <ScrollView>
          <GeneralTitle title="Inventario y precio de Bovinos" width={1100} />
          <CalendarButtom
            calendarAction={CalendarActionsEnum.GET_COWS_INVENTORY}
          />
          <InventoryCowFirstTable firstDataTable={firstDataTable} />
          <View style={{marginTop: 30}}>
            <LabelHead />
            {secondTableData.map((rowData, key) => (
              <View key={`${rowData.category}-${key}`}>
                <InventoryCowSecondTable rowData={rowData} index={key} />
              </View>
            ))}
          </View>
          <View style={{height: 200}} />
        </ScrollView>
      </ScrollView>
      <LoadingModal title="Cargando..." openCloseModal={isLoading} />
    </View>
  );
};
