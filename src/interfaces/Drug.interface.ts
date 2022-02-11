import {UnitTypeEnum} from '../constants/PresentationEnum';

export enum IDugsKeys {
  created = 'created',
  name = 'name',
  expDate = 'expDate',
  presentationForm = 'presentationForm',
  unitType = 'unitType',
  unitContent = 'unitContent',
  amount = 'amount',
  available = 'available',
  group = 'group',
  activePrincipal = 'activePrincipal',
}

export enum drugGroupEnum {
  EMPTY = '',
  DIAGNOSIS = 'Diagnóstico',
  VACCINE = 'Vacuna',
  DEWORMING = 'Desparacitación',
}

export interface IDrug {
  created: number;
  name: string;
  expDate: number;
  presentationForm: string;
  unitType: UnitTypeEnum;
  unitContent: number;
  amount: number;
  available: number;
  group: drugGroupEnum;
  activePrincipal?: string;
}
