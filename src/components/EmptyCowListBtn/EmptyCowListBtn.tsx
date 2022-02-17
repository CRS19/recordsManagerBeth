import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {InsertFirstCow} from '../../assets/ErrorImages/InsertFirstCow';
import {NoCowInDataBse} from '../../assets/ErrorImages/NoCowInDataBse';
import {ICow} from '../../interfaces/CowInterface';
import {useCowCardInfo} from '../CowCardInfo/state/useCowCardInfo';

interface IEmptyCowListBtnProps {
  cow: ICow;
}

export const EmptyCowListBtn = ({cow}: IEmptyCowListBtnProps) => {
  const {openInsertNewCow} = useCowCardInfo(cow);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{position: 'relative', top: 60, left: 40}}>
        <InsertFirstCow />
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={openInsertNewCow}>
        <NoCowInDataBse />
      </TouchableOpacity>
    </View>
  );
};
