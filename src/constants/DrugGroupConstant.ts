import {drugGroupEnum} from './../interfaces/Drug.interface';

export const DRUG_GROUPS = [
  {description: 'Seleccione un grupo', value: drugGroupEnum.EMPTY},
  {description: 'Desparacitante', value: drugGroupEnum.DEWORMING},
  {description: 'Vacuna', value: drugGroupEnum.VACCINE},
  {description: 'Diagnóstico', value: drugGroupEnum.DIAGNOSIS},
];
