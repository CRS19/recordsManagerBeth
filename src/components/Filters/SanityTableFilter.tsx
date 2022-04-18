import React from 'react';
import {View} from 'react-native';
import {ISelectedFilter, filterKeysEnum} from '../../constants/SanityRecords';
import {BorderButtom} from '../Buttoms/BorderButtom';

export interface ISanityTableFilterProps {
  filterSelected: ISelectedFilter;
  selectFilter: (filterKeysEnum: filterKeysEnum) => void;
}

export const SanityTableFilter = ({
  filterSelected,
  selectFilter,
}: ISanityTableFilterProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{marginRight: 10, alignSelf: 'center'}}>
        <BorderButtom
          title="Diagnósticos"
          onPress={() => selectFilter(filterKeysEnum.DIAGNOSIS)}
          isSelected={filterSelected.diagonsis}
        />
      </View>
      <View style={{marginRight: 10, alignSelf: 'center'}}>
        <BorderButtom
          title="Vacunas"
          onPress={() => selectFilter(filterKeysEnum.VACCINES)}
          isSelected={filterSelected.vaccines}
        />
      </View>
      <View style={{marginRight: 30, alignSelf: 'center'}}>
        <BorderButtom
          title="Desparacitaciones"
          onPress={() => selectFilter(filterKeysEnum.DEWORMINGS)}
          isSelected={filterSelected.dewormings}
        />
      </View>
    </View>
  );
};
