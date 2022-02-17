export enum UnitTypeEnum {
  EMPTY = '',
  GRAMOS = 'g',
  KILO_GRAMOS = 'kg',
  MILI_GRAMOS = 'mg',
  LITROS = 'lt',
  MILI_LITRO = 'ml',
}
export const DRUGS_PRESENTATIONS = [
  {description: '', value: UnitTypeEnum.EMPTY},
  {description: 'Gramos (g)', value: UnitTypeEnum.GRAMOS},
  {description: 'Kilogramos (kg)', value: UnitTypeEnum.KILO_GRAMOS},
  {description: 'Miligramos (mg)', value: UnitTypeEnum.MILI_GRAMOS},
  {description: 'Litros (lt)', value: UnitTypeEnum.LITROS},
  {description: 'Mililitros (ml)', value: UnitTypeEnum.MILI_LITRO},
];
