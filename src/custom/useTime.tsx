import React from 'react';
import {ECU_5_GTM} from '../constants/EcuTimestamp';
import moment from 'moment';
import {getCurrentTime} from '../utils/useGetOld';

interface IuseTime {
  getEcuatorTimestamp: (timestampToECUTime: number) => number;
  getPosiblePartoDay: () => number;
}

interface IuseTimeProps {
  timestamp?: number;
}

export const useTime = (props?: IuseTimeProps): IuseTime => {
  const getEcuatorTimestamp = (timestampToECUTime: number) => {
    return timestampToECUTime + ECU_5_GTM;
  };

  const getPosiblePartoDay = (): number => {
    const currentMoment = getCurrentTime();

    return currentMoment.add(283, 'days').unix();
  };

  return {getEcuatorTimestamp, getPosiblePartoDay};
};
