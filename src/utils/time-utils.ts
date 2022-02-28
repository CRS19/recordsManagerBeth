import moment from 'moment';
import {defaultTo, times, isNil} from 'lodash';

export const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export enum ENGLISH_DAYS_ENUM {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export const SPANISH_DAYS: Record<ENGLISH_DAYS_ENUM, string> = {
  [ENGLISH_DAYS_ENUM.MONDAY]: 'Lunes',
  [ENGLISH_DAYS_ENUM.TUESDAY]: 'Martes',
  [ENGLISH_DAYS_ENUM.WEDNESDAY]: 'Miércoles',
  [ENGLISH_DAYS_ENUM.THURSDAY]: 'Jueves',
  [ENGLISH_DAYS_ENUM.FRIDAY]: 'Viérnes',
  [ENGLISH_DAYS_ENUM.SATURDAY]: 'Sábado',
  [ENGLISH_DAYS_ENUM.SUNDAY]: 'Domingo',
};

export const getWeekNumber = () => {
  /*  Para el programador del futuro, el momento.now() retorna el timestamp en mili segundos,
      Entonces hay que dividir para mil para obtener el numero de semana que trabaja solo con segundos
  console.log('El moment que me da es -> ', moment.now());
  console.log(
    'lo que me interpreta el moment es -> ',
    moment.unix(moment.now() / 1000).format('yyyy-MM-DD:hh:mm:ss'),
  );
  console.log(moment.unix(moment.now() / 1000).format('w'));*/
  return Number(moment.unix(moment.now() / 1000).format('w'));
};

export const getTimestamp = () => {
  return moment.now();
};

export const getMomentOfDay = () => {
  return moment(moment.now()).format('HH:mm');
};

export const getDayName = (timestamp?: number) => {
  if (isNil(timestamp)) timestamp = moment.now();
  return moment(timestamp).format('dddd');
};

export const getDateOfDay = (timestamp: number, format?: string) => {
  return moment(timestamp).format(defaultTo(format, 'yyyy-MM-DD'));
};

export const getYear = (timestamp?: number) => {
  if (isNil(timestamp)) timestamp = moment.now();
  return moment(timestamp).format('yyyy');
};

export const isMorning = () => {
  const time = getMomentOfDay().split(':');
  const hour = time[0];
  const minute = time[1];
  if (Number(hour) < 12 && Number(minute) <= 59) {
    return true;
  } else {
    return false;
  }
};

export const getMaxDate = () => {
  return moment(moment.now()).format('yyy-MM-DD');
};

export const getCurrentDate = (format?: string) => {
  return moment(moment.now()).format(defaultTo(format, 'DD/MM/yyyy'));
};

export const getTimestampFromDate = (date: string) => {
  const momentDate = moment(date);
  const ts = momentDate.format('x');
  return ts;
};

export const getMonthNumber = (timestamp?: number) => {
  if (isNil(timestamp)) timestamp = moment.now();
  return Number(moment.unix(timestamp / 1000).format('M'));
};

export const getSemester = () => {
  const monthNumber = getMonthNumber(moment.now());
  if (monthNumber <= 6) {
    return `${moment().year()}-A`;
  } else {
    return `${moment().year()}-B`;
  }
};

export const getDiffDays = (pastTs: number, futureTs: number): string => {
  const pastDate = moment(futureTs);

  if (futureTs !== 0) {
    const days = pastDate.diff(pastTs, 'days').toString();
    console.log('dias de diferencia->', days);
    return days;
  } else {
    console.log('futureTs es 0');
    return '0';
  }
};

export const getMonthAndYearString = () => {
  const monthNumber = getMonthNumber(moment.now());
  const year = getYear(moment.now());
  return `${MONTHS[monthNumber - 1]}-${year}`;
};
