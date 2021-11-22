import React, {useEffect, useState} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {Record} from '../../interfaces/ReproductionRecord';
import {styles} from '../../theme/GlobalStyles';
import {get, isNil} from 'lodash';
import {reproductionRecordsColor} from '../../constants/colorEnum';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from '../../store/reducer';
import {setIsUsingControlGinecologico} from '../../store/actionCreators';

interface IRegisterListButtomProps {
  recordTypeList: Record[];
  listNumber: number;
  bgcolor: string;
  currentRecord: Record;
  onSelectCurrentRecord: (id: string | undefined, index: number) => void;
}

export const RegisterListButtom = ({
  listNumber,
  recordTypeList,
  bgcolor = 'blue',
  currentRecord,
  onSelectCurrentRecord,
}: IRegisterListButtomProps) => {
  const dispatch = useDispatch();
  const isUsingControlGinecologico = useSelector(
    (state: IAppState) => state.isUsingControlGinecologico!,
  );
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState(bgcolor);
  let flag: boolean =
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
    if (isUsingControlGinecologico === true) {
      flag = true;
      setIsClicked(false);
      dispatch(setIsUsingControlGinecologico(false));
    }
  }, [isUsingControlGinecologico]);

  useEffect(() => {
    if (isClicked === true) {
      onSelectCurrentRecord(recordTypeList[listNumber]._id!, listNumber);
      setColor(reproductionRecordsColor.SELECTED);
    } else {
      if (flag) onSelectCurrentRecord(undefined, 0);
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
