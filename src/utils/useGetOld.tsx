import React from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {IAppState} from '../store/reducer';

interface IUseGetOld {
  edadDias: string;
  edadDiasM: string;
  edadMeses: string;
  edadMesesA: string;
  edadAños: string;
  edadDiasNum: number;
  edadMesesNum: number;
  edadAñosNum: number;
}

interface IUseGetOldProps {
  birtdayTiemstamp: number;
}

export const useGetOld = ({birtdayTiemstamp}: IUseGetOldProps): IUseGetOld => {
  const getTimestampInSeconds = (timestamp: number): number => {
    return timestamp / 1000;
  };

  const currenTimestamp = moment.unix(getTimestampInSeconds(moment.now()));
  const edadAños = currenTimestamp.diff(birtdayTiemstamp, 'years').toString();
  const edadMeses = currenTimestamp.diff(birtdayTiemstamp, 'months').toString();
  const edadMesesA = String(Number(edadMeses) - 12 * Number(edadAños));
  const edadDias = currenTimestamp.diff(birtdayTiemstamp, 'days').toString();
  const edadDiasM = String(Number(edadDias) - 30 * Number(edadMeses));

  const edadDiasNum = Number(edadDias);
  const edadMesesNum = Number(edadMeses);
  const edadAñosNum = Number(edadAños);

  console.log('*****************************************');
  console.log(currenTimestamp);
  console.log('age: ', currenTimestamp.diff(birtdayTiemstamp, 'days'));
  console.log('age: ', currenTimestamp.diff(birtdayTiemstamp, 'months'));
  console.log('age: ', currenTimestamp.diff(birtdayTiemstamp, 'years'));

  return {
    edadDias,
    edadDiasM,
    edadMeses,
    edadMesesA,
    edadAños,
    edadMesesNum,
    edadAñosNum,
    edadDiasNum,
  };
};
