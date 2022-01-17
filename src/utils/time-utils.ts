import moment from 'moment';

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

export const getDateOfDay = (timestamp: number) => {
  return moment(timestamp).format('yyyy-MM-dd');
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
