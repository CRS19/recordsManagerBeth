import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {IReproductionRecord, Record} from '../../interfaces/ReproductionRecord';
import {styles} from '../../theme/GlobalStyles';
import {get, isNil} from 'lodash';
import {reproductionRecordsColor} from '../../constants/colorEnum';

interface IRegisterListButtomProps {
  recordTypeList: Record[];
  listNumber: number;
  bgcolor: string;
  currentRecord: Record;
  onSelectCurrentRecord: (id: string | undefined) => void;
}

export const RegisterListButtom = ({
  listNumber,
  recordTypeList,
  bgcolor = 'blue',
  currentRecord,
  onSelectCurrentRecord,
}: IRegisterListButtomProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState(bgcolor);
  const flag: boolean =
    get(currentRecord, '_id', '') === recordTypeList[listNumber]._id;

  const handleOffFocus = () => {
    if (!isNil(currentRecord)) {
      setIsClicked(false);
      setColor(bgcolor);
    }
  };

  useEffect(() => {
    flag ? setColor(reproductionRecordsColor.SELECTED) : handleOffFocus();
  }, [currentRecord]);

  useEffect(() => {
    if (isClicked === true) {
      onSelectCurrentRecord(recordTypeList[listNumber]._id!);
      setColor(reproductionRecordsColor.SELECTED);
    } else {
      if (flag) onSelectCurrentRecord(undefined);
      setColor(bgcolor);
    }
  }, [isClicked]);

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#28425B', false, 23)}
      onPress={() => setIsClicked(!isClicked)}>
      <View
        style={{
          ...styles.ListRecordButtom,
          backgroundColor: color,
          borderWidth: isClicked ? 2 : 0,
        }}>
        <Text style={{fontSize: 18}}>{listNumber + 1}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
