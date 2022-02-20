import {drugGroupEnum} from './../interfaces/Drug.interface';
import {UnitTypeEnum} from './PresentationEnum';

export const DRUG_GROUPS = [
  {description: 'Seleccione un grupo', value: drugGroupEnum.EMPTY},
  {description: 'Desparacitante', value: drugGroupEnum.DEWORMING},
  {description: 'Vacuna', value: drugGroupEnum.VACCINE},
  {description: 'Diagnóstico', value: drugGroupEnum.DIAGNOSIS},
];

export const EMPTY_DRUG = {
  group: drugGroupEnum.EMPTY,
  created: 0,
  name: '',
  expDate: 0,
  presentationForm: '',
  unitType: UnitTypeEnum.EMPTY,
  amount: 0,
  unitContent: 0,
  available: 0,
};
