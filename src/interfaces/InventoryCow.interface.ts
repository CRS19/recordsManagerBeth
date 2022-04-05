import {categoriaType} from './CowInterface';

export interface IInventoryCowFirstTable {
  areteNumber: string;
  fechaNacimiento: string;
  edadMesesAños: ILuxonDurationObject;
  pesoVivo: number;
  precioPesoVivo: number;
  categoria: categoriaType;
  reproductiveStatus: string;
}

export interface ILuxonDurationObject {
  years: number;
  months: number;
  days: number;
}
