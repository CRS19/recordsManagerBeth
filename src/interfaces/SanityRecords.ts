export enum frequencyDiagnosisEnum {
  EMPTY = '',
  DAILY = 'diario',
  WEEKLY = 'semanal',
  MONTHLY = 'mensual',
}

export enum applicationWayEnum {
  EMPTY = '',
  ORAL = 'oral',
  SUBCUTANEOUS = 'subcutánea',
  INTRAMUSCULAR = 'intramuscular',
  INTRAVENOUS = 'intravenosa',
  PERITONEAL = 'peritoneal',
}

export enum diseasesEnum {
  EMPTY = '',
  BRUCELOSIS = 'brucelosis',
  CUATRO_VIRAL = 'cuatro viral',
  CARBUNCO_TRIPLE = 'carbunco triple',
  FIEBRE_AFTOSA = 'fiebre aftosa',
}

export interface IFrequencyDiagnosis {
  times: number;
  at: frequencyDiagnosisEnum;
}

export enum IDrugDiagnosisKey {
  DRUG_ID = 'drugId',
  DOSE = 'dose',
  FREQUENCY = 'frequency',
  DURATION = 'duration',
  TOTAL = 'total',
  APPLICATION_WAY = 'applicationWay',
}

export enum IVacunaFormKeys {
  CREATED = 'created',
  DRUG_ID = 'drugId',
  DISEASE = 'disease',
  COMERCIAL_NAME = 'comercialName',
  DOSIS = 'dosis',
}

export interface IDrugDiagnosis {
  drugId: string; // _id from drug colection
  dose: number;
  frequency: IFrequencyDiagnosis;
  duration: number;
  total: number;
  applicationWay: applicationWayEnum;
}

export interface IDiagnosis {
  diagnosisDescriptrion: string;
  created: number;
  drugs: IDrugDiagnosis[];
}

export interface IVaccines {
  created: number;
  drugId: string;
  disease: diseasesEnum;
  comercialName: string;
  dosis: number; // recordar que siempre son en ml las vacunas
}

export interface IDeworming {
  created: number;
  drugId: string;
  comertialName: string;
  activePrincipal: string;
  dosis: number;
  applicationWay: applicationWayEnum;
}

export interface ISanityRecord {
  idVaca: string;
  _id?: string;
  diagnosis: IDiagnosis[];
  vaccines: IVaccines[];
  deworming: IDeworming[];
}
