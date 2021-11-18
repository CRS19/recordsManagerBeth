import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ArrowList} from '../../assets/arrowList';
import {
  IReproductionRecord,
  Record,
  RecordReproductionType,
} from '../../interfaces/ReproductionRecord';
import {
  createReproductionRecord,
  getReproductionRecord,
} from '../../store/actionCreators';
import {IAppState} from '../../store/reducer';
import {styles} from '../../theme/GlobalStyles';
import {RegisterListButtom} from '../Buttoms/RegisterListButtom';
import {reduce, size} from 'lodash';
import {ReproductionColor} from '../../constants/ReoproductionRecordColor';

export interface IRegisterListProps {
  title: string;
  record: IReproductionRecord;
  currentRecord: Record;
  recordsList: Record[];
  recordType: RecordReproductionType;
  onSelectCurrentRecord: (id: string | undefined) => void;
}

export const RegisterList = ({
  title,
  record,
  recordType,
  recordsList,
  currentRecord,
  onSelectCurrentRecord,
}: IRegisterListProps) => {
  const recordsIndex = Array.from(Array(size(recordsList)).keys());

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.RegisterListTitle}>{title}</Text>
      <View style={styles.RegisterDivider} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ArrowList rigth={true} />
        <View style={{marginHorizontal: 15, width: 300, height: 'auto'}}>
          <FlatList
            horizontal={true}
            data={recordsIndex}
            keyExtractor={(item, iterator) => {
              return String(item).concat(iterator.toString());
            }}
            renderItem={registro => (
              <RegisterListButtom
                recordTypeList={recordsList}
                listNumber={registro.item}
                bgcolor={
                  ReproductionColor[recordsList[registro.item].recordType]
                }
                currentRecord={currentRecord}
                onSelectCurrentRecord={onSelectCurrentRecord}
              />
            )}
          />
        </View>
        <ArrowList rigth={false} />
      </View>
    </View>
  );
};
