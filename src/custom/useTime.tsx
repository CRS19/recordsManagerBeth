import {ECU_5_GTM} from '../constants/EcuTimestamp';
import {getCurrentTime} from '../utils/useGetOld';
import moment from 'moment';

interface IuseTime {
  getEcuatorTimestamp: () => number;
  getPosiblePartoDay: () => number;
}

interface IuseTimeProps {
  timestamp?: number;
}

export const useTime = (props?: IuseTimeProps): IuseTime => {
  const getEcuatorTimestamp = () => {
    return Number(moment.now());
  };

  const getPosiblePartoDay = (): number => {
    const currentMoment = getCurrentTime();
    let posibleParto = currentMoment.add(283, 'days').unix().toString();
    posibleParto = `${posibleParto}000`;

    return Number(posibleParto);
  };

  return {getEcuatorTimestamp, getPosiblePartoDay};
};
