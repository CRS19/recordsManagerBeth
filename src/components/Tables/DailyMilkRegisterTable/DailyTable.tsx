import React from 'react';
import {View} from 'react-native';
import {IDailyMilkRecord} from '../../../interfaces/DailyMilkRecord';
import {IProductorasArray} from '../../../interfaces/ProductorasId';
import {DailyRow} from '../DailyMilkRow/DailyRow';
import {DailyRowView} from '../DailyMilkRow/DailyRowView';
// TODO heith de 55 cada row

export interface IDailyTableProps {
  productorasList: IProductorasArray;
  dailyProductionRecords: IDailyMilkRecord[];
  dailyProdRecordByDate: IDailyMilkRecord[];
  isDateView: boolean;
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
  dailyProdRecordByDate,
  isDateView,
}: IDailyTableProps) => {
  return (
    <View style={{marginTop: 27, elevation: 40, backgroundColor: 'red'}}>
      <DailyRow isHead={true} />
      {!isDateView ? (
        dailyProductionRecords.map((vaca, index) => (
          <View key={vaca._id!.concat(index.toString())}>
            <DailyRow
              cowInfo={vaca}
              index={index + 1}
              changeCalostroProductivaInfo={changeCalostroProductivaInfo}
            />
          </View>
        ))
      ) : (
        <DailyRowView records={dailyProdRecordByDate} />
      )}
    </View>
  );
};
