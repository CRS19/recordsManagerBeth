import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import {IDailyMilkRecord} from '../../interfaces/DailyMilkRecord';
import {styles} from '../../theme/GlobalStyles';

export interface GeneralRegisterBtnProps {
  record: IDailyMilkRecord;
  listNumber: number;
}

export const GeneralRegisterBtn = ({
  record,
  listNumber,
}: GeneralRegisterBtnProps) => {
  const navigation = useNavigation();

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#28425B', false, 23)}
      onPress={() => {
        console.log('abrir informe');
        navigation.navigate('ProductionReportScreen', {
          record,
          index: listNumber,
        });
      }}>
      <View
        style={{
          ...styles.ListRecordButtom,
          backgroundColor: '#F2994A',
        }}>
        <Text style={{fontSize: 18}}>{listNumber + 1}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
