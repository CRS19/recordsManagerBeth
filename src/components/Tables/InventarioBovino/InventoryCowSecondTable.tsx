import React from 'react';
import {Text, View} from 'react-native';
import {IInventoryCowSecondTable} from '../../../interfaces/InventoryCow.interface';
import {InventorySecordTableHead} from './inventorySecordTableHead/InventorySecordTableHead';

interface IInventoryCowSecondTableProps {
  rowData: IInventoryCowSecondTable;
  index: number;
}

export const InventoryCowSecondTable = ({
  rowData,
  index,
}: IInventoryCowSecondTableProps) => {
  return (
    <View>
      <InventorySecordTableHead
        TopBorder={index === 0}
        rowData={rowData}
        category={rowData.category}
      />
    </View>
  );
};
