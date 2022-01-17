import React from 'react';
import {Text, View} from 'react-native';
import {IDailyMilkRecord} from '../../../interfaces/DailyMilkRecord';
import {IProductorasArray} from '../../../interfaces/ProductorasId';
import {DailyRow} from '../DailyMilkRow/DailyRow';
// TODO heith de 55 cada row

export interface IDailyTableProps {
  productorasList: IProductorasArray;
  dailyProductionRecords: IDailyMilkRecord[];
  changeCalostroProductivaInfo: (
    idVaca: string,
    payload: boolean,
    calostro: boolean,
  ) => void;
}

export const DailyTable = ({
  productorasList,
  dailyProductionRecords,
  changeCalostroProductivaInfo,
}: IDailyTableProps) => {
  return (
    <View style={{marginTop: 27, elevation: 40, backgroundColor: 'red'}}>
      <DailyRow isHead={true} />
      {dailyProductionRecords.map((vaca, index) => (
        <View key={vaca._id!.concat(index.toString())}>
          <DailyRow
            cowInfo={vaca}
            index={index + 1}
            changeCalostroProductivaInfo={changeCalostroProductivaInfo}
          />
        </View>
      ))}
      <Text
        onPress={() =>
          console.log(JSON.stringify(dailyProductionRecords, null, 3))
        }>
        ver registro
      </Text>
    </View>
  );
};
