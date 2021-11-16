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

export interface IRegisterListProps {
  title: string;
  record: IReproductionRecord;
  currentRecord: Record;
  recordType: RecordReproductionType;
  onSelectCurrentRecord: (id: string) => void;
}

export const RegisterList = ({
  title,
  record,
  recordType,
  currentRecord,
  onSelectCurrentRecord,
}: IRegisterListProps) => {
  const recordTypeList = record.records.filter(
    record => record.recordType === recordType,
  );

  const recordsIndex = Array.from(Array(size(recordTypeList)).keys());

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
      <Text style={styles.RegisterListTitle}>{title}</Text>
      <View style={styles.RegisterDivider} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ArrowList rigth={true} />
        <View style={{marginHorizontal: 15, width: 250, height: 'auto'}}>
          <FlatList
            horizontal={true}
            data={recordsIndex}
            keyExtractor={(item, iterator) => {
              return String(item).concat(iterator.toString());
            }}
            renderItem={registro => (
              <RegisterListButtom
                recordTypeList={recordTypeList}
                listNumber={registro.item}
                bgcolor={'#5DCEF3'}
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
