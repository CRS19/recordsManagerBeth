import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IAppState} from '../../../store/reducer';
import {MainRecord} from './MainRecord';
import {MainRecordView} from './MainRecordView';

export const MainRecordSwitch = () => {
  const isInsertion = useSelector((state: IAppState) => state.insertNewCow!);

  const getComponent = () => {
    return isInsertion ? <MainRecord /> : <MainRecordView />;
  };

  return getComponent();
};
