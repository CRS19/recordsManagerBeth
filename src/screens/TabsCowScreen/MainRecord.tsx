import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IAppState} from '../../store/reducer';

export const MainRecord = () => {
  const currentCow = useSelector((state: IAppState) => state.CurrentCow);

  return (
    <View>
      <Text>Registro Master {currentCow?.nombre} </Text>
    </View>
  );
};
