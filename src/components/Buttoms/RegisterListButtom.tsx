import React, {useEffect, useState} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {IReproductionRecord, Record} from '../../interfaces/ReproductionRecord';
import {styles} from '../../theme/GlobalStyles';
import {get} from 'lodash';

interface IRegisterListButtomProps {
  recordTypeList: Record[];
  listNumber: number;
  bgcolor: string;
  currentRecord: Record;
  onSelectCurrentRecord: (id: string) => void;
}

export const RegisterListButtom = ({
  listNumber,
  recordTypeList,
  bgcolor = 'blue',
  currentRecord,
  onSelectCurrentRecord,
}: IRegisterListButtomProps) => {
  const [color, setColor] = useState(bgcolor);

  useEffect(() => {
    get(currentRecord, '_id', '') === recordTypeList[listNumber]._id
      ? setColor('#EB5757')
      : setColor('#5DCEF3');
  }, [currentRecord]);

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
      onPress={() => {
        console.log(JSON.stringify(recordTypeList[listNumber], null, 3));
        onSelectCurrentRecord(recordTypeList[listNumber]._id!);
      }}>
      <View style={{...styles.ListRecordButtom, backgroundColor: color}}>
        <Text style={{fontSize: 24}}>{listNumber + 1}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
