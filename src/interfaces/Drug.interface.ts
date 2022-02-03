export enum IDugsKeys {
  created = 'created',
  name = 'name',
  expDate = 'expDate',
  presentationForm = 'presentationForm',
  unitType = 'unitType',
  unitContent = 'unitContent',
  amount = 'amount',
  available = 'available',
}

export enum UnitTypeEnum {
  EMPTY = '',
  GRAMOS = 'g',
  MILI_GRAMOS = 'mg',
  LITROS = 'lt',
  MILI_LITROS = 'ml',
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
}
