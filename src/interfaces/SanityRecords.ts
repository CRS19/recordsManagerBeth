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
  DOSE_UNIT = 'doseUnit',
  COMERTIAL_NAME = 'comertialName',
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

export enum IDewormingFormKeys {
  CREATED = 'created',
  DRUG_ID = 'drugId',
  COMMERTICAL_NAME = 'comertialName',
  ACTIVE_PRINCIPAL = 'activePrincipal',
  DOSIS = 'dosis',
  APPLICATION_WAY = 'applicationWay',
}

export interface IDrugDiagnosis {
  drugId: string; // _id from drug colection
  dose: number;
  frequency: IFrequencyDiagnosis;
  doseUnit: string;
  comertialName: string;
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
  doseUnit: string;
}

export interface IDeworming {
  created: number;
  drugId: string;
  comertialName: string;
  activePrincipal: string;
  dosis: number;
  doseUnit: string;
  applicationWay: applicationWayEnum;
}

export interface ISanityRecord {
  idVaca: string;
  _id?: string;
  diagnosis: IDiagnosis[];
  vaccines: IVaccines[];
  deworming: IDeworming[];
}

export interface ISanityRecordRowDataView {
  created: number;
  total: number;
  frequency?: string;
  dosis: number;
  doseUnit?: string;
  applicationWay?: string;
  diagnosisDescriptrion?: string;
  commertialName?: string;
  disease?: string;
  activePrincipal?: string;
  [k: string]: any;
}
