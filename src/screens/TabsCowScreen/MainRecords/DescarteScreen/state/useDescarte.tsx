import {useState} from 'react';
import {getDateOfDay, getTimestamp} from '../../../../../utils/time-utils';
import {useGetOld} from '../../../../../utils/useGetOld';
import {ICalendarSelected} from '../../../../MilkDailyRegister/state/useMilkDailyRegister';
import {
  DeathCertificateInitialState,
  getDayNumber,
  getMonthNameUppercase,
  getYear,
} from '../constants/DescarteContants';
import {
  CurrentDayInfo,
  IDeathCertificate,
  IUseDescarte,
  IUseDescarteProps,
  IWitness,
  WORK_POSITIONS,
} from '../Interfaces/Descarte.interface';
import {cloneDeep, set} from 'lodash';

export const useDescarte = ({currentCow}: IUseDescarteProps): IUseDescarte => {
  const {edadMeses} = useGetOld({
    birtdayTiemstamp: currentCow.fechaDeNacimiento,
  });
  const [markedD, setMarkedD] = useState<ICalendarSelected>({
    [getDateOfDay(getTimestamp())]: {
      selected: true,
      selectedColor: 'orange',
      activeOpacity: 0,
    },
  });

  const [deathCertificate, setDeathCertificate] = useState<IDeathCertificate>(
    DeathCertificateInitialState(currentCow, Number(edadMeses)),
  );

  const [dayInfo] = useState<CurrentDayInfo>({
    numberDay: getDayNumber(),
    month: getMonthNameUppercase(),
    year: getYear(),
  });

  const addOtherWitness = () => {
    setDeathCertificate({
      ...deathCertificate,
      witnesses: [
        ...deathCertificate.witnesses,
        {fullName: '', possition: WORK_POSITIONS.EMPTY},
      ],
    });
  };

  const deleteWitness = () => {
    if (deathCertificate.witnesses.length > 1) {
      setDeathCertificate({
        ...deathCertificate,
        witnesses: deathCertificate.witnesses.slice(0, -1),
      });
    }
  };

  const onChangeNameWitness = (newName: string, witnessPosition: number) => {
    const witnessesArrayClon: IWitness[] = cloneDeep(
      deathCertificate.witnesses,
    );

    set(witnessesArrayClon[witnessPosition], 'fullName', newName);

    setDeathCertificate({
      ...deathCertificate,
      witnesses: witnessesArrayClon,
    });
  };

  const onChangeWitnessWorkPossition = (
    newPosition: WORK_POSITIONS,
    witnessPosition: number,
  ) => {
    const witnessesArrayClon: IWitness[] = cloneDeep(
      deathCertificate.witnesses,
    );

    set(witnessesArrayClon[witnessPosition], 'possition', newPosition);

    setDeathCertificate({
      ...deathCertificate,
      witnesses: witnessesArrayClon,
    });
  };

  return {
    markedD,
    setMarkedD,
    dayInfo,
    actions: {
      addOtherWitness,
      deleteWitness,
      InputWitnessesCardsActions: {
        onChangeNameWitness,
        onChangeWitnessWorkPossition,
        witnesses: deathCertificate.witnesses,
      },
    },
    deathCertificate,
  };
};
