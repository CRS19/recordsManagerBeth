import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {IControlGinecologicoRowData} from '../../../interfaces/ControlGinecologico';
import {IReproductionRecord} from '../../../interfaces/ReproductionRecord';
import {ControlGinecologicoHead} from './ControlGinecologicoHead/ControlGinecologicoHead';
import {ControlGinecologicoRow} from './ControlGinecologicoRow/ControlGinecologicoRow';

export interface IControlGinecologicoTableProps {
  allRecords: IReproductionRecord[];
  rowsData: IControlGinecologicoRowData[];
}

export const ControlGinecologicoTable = ({
  allRecords,
  rowsData,
}: IControlGinecologicoTableProps) => {
  return (
    <View>
      <ScrollView horizontal>
        <View>
          <ControlGinecologicoHead />
          {rowsData.map((data, index) => (
            <View key={`${data}-${index}`}>
              <ControlGinecologicoRow data={data} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
