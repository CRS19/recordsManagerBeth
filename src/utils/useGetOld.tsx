import moment from 'moment';
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

export const getCurrentTime = () => {
  const getTimestampInSeconds = (timestamp: number): number => {
    return timestamp / 1000;
  };

  return moment.unix(getTimestampInSeconds(moment.now()));
};

export const useGetOld = ({birtdayTiemstamp}: IUseGetOldProps): IUseGetOld => {
  const currenTimestamp = getCurrentTime();
  const edadAños = currenTimestamp.diff(birtdayTiemstamp, 'years').toString();
  const edadMeses = currenTimestamp.diff(birtdayTiemstamp, 'months').toString();
  const edadMesesA = String(Number(edadMeses) - 12 * Number(edadAños));
  const edadDias = currenTimestamp.diff(birtdayTiemstamp, 'days').toString();
  const edadDiasM = String(Number(edadDias) - 30 * Number(edadMeses));

  const edadDiasNum = Number(edadDias);
  const edadMesesNum = Number(edadMeses);
  const edadAñosNum = Number(edadAños);

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
