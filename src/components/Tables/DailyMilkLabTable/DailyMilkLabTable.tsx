import React from 'react';
import {View} from 'react-native';
import {IDailyMilkLabData} from '../../../interfaces/DailyMilkLab';
import {DailyMilkLabTableFooter} from './DailyMilkLabTableFooter/DailyMilkLabTableFooter';
import {DailyMilkLabTableHead} from './DailyMilkLabTableHead/DailyMilkLabTableHead';
import {DailyMilkLabTableRow} from './DailyMilkLabTableRow/DailyMilkLabTableRow';

export interface IDailyMilkLabTableProps {
  dataArray: IDailyMilkLabData[];
}

export const DailyMilkLabTable = ({dataArray}: IDailyMilkLabTableProps) => {
  let totalMonthLab = 0;
  let totalMonthCalf = 0;
  let totalMonthMilk = 0;

  return (
    <View>
      <DailyMilkLabTableHead />
      {dataArray.map((data, index) => {
        totalMonthLab += data.totalLab;
        totalMonthCalf += data.totalCalf;
        totalMonthMilk += data.totalLab + data.totalCalf;

        return (
          <View key={`${data._id}-${index}`}>
            <DailyMilkLabTableRow index={index} data={data} />
          </View>
        );
      })}
      <DailyMilkLabTableFooter
        totals={{totalMonthLab, totalMonthCalf, totalMonthMilk}}
      />
    </View>
  );
};
