import {isNil} from 'lodash';
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
  otherTs?: number;
}

export const getCurrentTime = () => {
  const getTimestampInSeconds = (timestamp: number): number => {
    return timestamp / 1000;
  };

  return moment.unix(getTimestampInSeconds(moment.now()));
};

export const useGetOld = ({
  birtdayTiemstamp,
  otherTs,
}: IUseGetOldProps): IUseGetOld => {
  if (isNil(otherTs)) {
    const currenTimestamp = getCurrentTime();
    const edadAños = currenTimestamp.diff(birtdayTiemstamp, 'years').toString();
    const edadMeses = currenTimestamp
      .diff(birtdayTiemstamp, 'months')
      .toString();
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
  } else {
    const birthdayDate = moment(birtdayTiemstamp);
    const edadAños = birthdayDate.diff(otherTs, 'years').toString();
    const edadMeses = birthdayDate.diff(otherTs, 'months').toString();
    const edadMesesA = String(Number(edadMeses) - 12 * Number(edadAños));
    const edadDias = birthdayDate.diff(otherTs, 'days').toString();
    const edadDiasM = String(Number(edadDias) - 30 * Number(edadMeses));

    const edadDiasNum = Number(edadDias);
    const edadMesesNum = Number(edadMeses);
    const edadAñosNum = Number(edadAños);

    console.log(`Edad en años: ${edadAños}`);
    console.log(`Edad en meses: ${edadMeses}`);
    console.log(`Edad en dias: ${edadMesesA}`);
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
  }
};
