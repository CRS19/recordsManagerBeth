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

export interface IInventoryCowSecondTable {
  number: number;
  indice: string;
  ubas: number;
  category: string;
}

export interface ILuxonDurationObject {
  years: number;
  months: number;
  days: number;
}
