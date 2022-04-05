import {ICow} from './../../../../../interfaces/CowInterface';
import {
  IDeathCertificate,
  WORK_POSITIONS,
} from './../Interfaces/Descarte.interface';
import {MONTHS} from './../../../../../utils/time-utils';
import {getCurrentDate} from '../../../../../utils/time-utils';

export const DeathCertificateInitialState = (
  currentCow: ICow,
  edadMeses: number,
): IDeathCertificate => ({
  witnesses: [{fullName: '', possition: WORK_POSITIONS.EMPTY}],
  idVaca: currentCow.idVaca,
  fechaNacimiento: currentCow.fechaDeNacimiento,
  especie: 'bovina',
  edadMeses: edadMeses,
});

export const getDayNumber = (): number =>
  Number(getCurrentDate().split('/')[0]);

export const getMonthNameUppercase = (): string =>
  MONTHS[Number(getCurrentDate().split('/')[1])].toUpperCase();

export const getYear = (): number => Number(getCurrentDate().split('/')[2]);

export const WORK_POSITIONS_PICKER_ITEMS = [
  {
    value: WORK_POSITIONS.EMPTY,
    label: 'SELECCIONE UN CARGO',
  },
  {
    value: WORK_POSITIONS.TESTIGO,
    label: 'Testigo',
  },
  {
    value: WORK_POSITIONS.ADMINISTRADOR_ESTATION_TUNSHI,
    label: 'Administrador de la Estación',
  },
  {
    value: WORK_POSITIONS.INVENTARIADOR,
    label: 'Inventariador',
  },
  {
    value: WORK_POSITIONS.MEDICO_VETERINARIO_ZOOTECNISTA,
    label: 'Medico Veterinario Z.',
  },
];
