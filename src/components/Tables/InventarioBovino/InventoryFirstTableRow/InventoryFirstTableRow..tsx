import React from 'react';
import {Text, View} from 'react-native';
import {IInventoryCowFirstTable} from '../../../../interfaces/InventoryCow.interface';
import {styles} from '../../../../theme/GlobalStyles';
import {getDateOfDay} from '../../../../utils/time-utils';

interface IInvenoryCowFirstTableProps {
  index: number;
  rowData: IInventoryCowFirstTable;
}

export const InventoryFirstTableRow = ({
  index,
  rowData,
}: IInvenoryCowFirstTableProps) => {
  return (
    <View
      style={{
        marginHorizontal: 53,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{...styles.DailyMilkRow, width: 45, borderTopWidth: 0}}>
          <Text style={{padding: 5, fontSize: 18, textAlign: 'center'}}>
            {index + 1}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 109, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {rowData.areteNumber}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 170, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {rowData.fechaNacimiento}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 170, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {`${rowData.edadMesesAños.months} / ${rowData.edadMesesAños.years}`}
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 170, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {rowData.pesoVivo} kg
          </Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 170, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {rowData.precioPesoVivo} USD
          </Text>
        </View>
        {/**<View style={{...styles.DailyMilkRow, width: 170, borderTopWidth: 0}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {rowData.categoria}
          </Text>
      </View>*/}
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 170,
            borderTopWidth: 0,
            borderRightWidth: 2,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {rowData.reproductiveStatus}
          </Text>
        </View>
      </View>
    </View>
  );
};
