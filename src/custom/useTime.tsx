import React from 'react';
import {ECU_5_GTM} from '../constants/EcuTimestamp';

interface IuseTime {
  getEcuatorTimestamp: (timestampToECUTime: number) => number;
}

interface IuseTimeProps {
  timestamp?: number;
}

export const useTime = (props?: IuseTimeProps): IuseTime => {
  const getEcuatorTimestamp = (timestampToECUTime: number) => {
    return timestampToECUTime + ECU_5_GTM;
  };

  return {getEcuatorTimestamp};
};
