import React from 'react';
import {Text, View} from 'react-native';
import {IInventoryCowSecondTable} from '../../../../interfaces/InventoryCow.interface';

interface IInventorySecordTableHeadProps {
  TopBorder: boolean;
  rowData: IInventoryCowSecondTable;
  category: string;
}

export const InventorySecordTableHead = ({
  TopBorder,
  rowData,
}: IInventorySecordTableHeadProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 56,
        width: 690,
        borderWidth: 2,
        borderTopWidth: TopBorder ? 2 : 0,
        marginLeft: 60,
      }}>
      <View
        style={{
          width: 370,
          borderRightWidth: 2,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, marginLeft: 10}}>{rowData.category}</Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRightWidth: 2,
        }}>
        <Text style={{fontSize: 18}}>{rowData.number}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRightWidth: 2,
        }}>
        <Text style={{fontSize: 18}}>{rowData.indice}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18}}>{rowData.ubas}</Text>
      </View>
    </View>
  );
};
