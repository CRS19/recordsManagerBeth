import {ICow} from './../../../../../interfaces/CowInterface';
import {ICalendarSelected} from '../../../../MilkDailyRegister/state/useMilkDailyRegister';

export enum WORK_POSITIONS {
  EMPTY = 'SELECCIONE UN CARGO',
  MEDICO_VETERINARIO_ZOOTECNISTA = 'Médico Veterinario Z.',
  ADMINISTRADOR_ESTATION_TUNSHI = 'Administrador. EE. Tunshi.',
  TESTIGO = 'Testigo. UAIBL.',
  INVENTARIADOR = 'Inventariador UABB.',
}

export interface CurrentDayInfo {
  numberDay: number;
  month: string;
  year: number;
}

export interface IUseDescarte {
  dayInfo: CurrentDayInfo;
  markedD: ICalendarSelected;
  deathCertificate: IDeathCertificate;
  deathDocumentNumber: number;
  actions: {
    addOtherWitness: () => void;
    deleteWitness: () => void;
    saveDeathCertificate: () => void;
    InputWitnessesCardsActions: {
      onChangeNameWitness: (newName: string, witnessPosition: number) => void;
      onChangeWitnessWorkPossition: (
        newPosition: WORK_POSITIONS,
        witnessPosition: number,
      ) => void;
      witnesses: IWitness[];
    };
    responsableDiagnosisActions: {
      onChangeNecroptiaResponsable: (newResponsable: string) => void;
      onChangeDiagnosis: (newDiagnosis: string) => void;
    };
  };
  setMarkedD: React.Dispatch<React.SetStateAction<ICalendarSelected>>;
}

export interface IDeathCertificate {
  witnesses: IWitness[];
  idVaca: string;
  fechaNacimiento: number;
  especie: 'bovina';
  edadMeses: number;
  deathCertificateId?: number;
  raza: string;
  areteNumber: string;
  precio: number;
  sexo: string;
  necroptiaResponsable: string;
  deathDiagnosis: string;
}

export interface IUseDescarteProps {
  currentCow: ICow;
}

export interface IWitness {
  fullName: string;
  possition: WORK_POSITIONS;
}
