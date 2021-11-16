import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {FillButton} from '../Buttoms/FillButton';

export interface IGeneralControlProps {
  title: string;
  tittleBtn1: string;
  tittleBtn2: string;
  isClikedBtn1: boolean;
  isClikedBtn2: boolean;
  onClikedBtn1: () => void;
  onClikedBtn2: () => void;
}

export const GeneralControl = ({
  title,
  tittleBtn1,
  tittleBtn2,
  isClikedBtn1,
  isClikedBtn2,
  onClikedBtn1,
  onClikedBtn2,
}: IGeneralControlProps) => {
  return (
    <View style={{alignItems: 'center', marginHorizontal: 20}}>
      <Text style={styles.RegisterListTitle}>{title}</Text>
      <View style={{...styles.RegisterDivider, width: 205}} />
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{marginHorizontal: 3.5}}>
          <FillButton
            title={tittleBtn1}
            onPress={onClikedBtn1}
            color={isClikedBtn1 ? 'red' : undefined}
            width={102}
            height={44}
            disable={isClikedBtn2}
          />
        </View>
        <View style={{marginHorizontal: 3.5}}>
          <FillButton
            title={tittleBtn2}
            onPress={onClikedBtn2}
            color={isClikedBtn2 ? 'red' : undefined}
            width={97}
            height={44}
            disable={isClikedBtn1}
          />
        </View>
      </View>
    </View>
  );
};
