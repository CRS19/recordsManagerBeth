import React from 'react';
import {View} from 'react-native';
import {IInventoryCowFirstTable} from '../../../interfaces/InventoryCow.interface';
import {InventoryFirstTableHead} from './InventoryFirstTableHead/InventoryFirstTableHead';
import {InventoryFirstTableRow} from './InventoryFirstTableRow/InventoryFirstTableRow.';

interface IInventoryCowFirstTableProps {
  firstDataTable: IInventoryCowFirstTable[];
}

export const InventoryCowFirstTable = ({
  firstDataTable,
}: IInventoryCowFirstTableProps) => {
  return (
    <View>
      <InventoryFirstTableHead />
      {firstDataTable.map((rowData: IInventoryCowFirstTable, index) => (
        <View key={`${rowData.areteNumber}-${index}`}>
          <InventoryFirstTableRow index={index} rowData={rowData} />
        </View>
      ))}
    </View>
  );
};
