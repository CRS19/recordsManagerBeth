import {IControlGinecologicoRowData} from '../interfaces/ControlGinecologico';

export const areMonthsEmpy = (
  data: Partial<IControlGinecologicoRowData>,
): boolean =>
  data.ene === '' &&
  data.feb === '' &&
  data.mar === '' &&
  data.abr === '' &&
  data.may === '' &&
  data.jun === '' &&
  data.jul === '' &&
  data.ago === '' &&
  data.sep === '' &&
  data.oct === '' &&
  data.nov === '' &&
  data.dic === '';
