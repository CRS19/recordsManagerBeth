import {useEffect, useState} from 'react';
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
import {cloneDeep, isNil, set} from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from '../../../../../store/reducer';
import {Alert} from 'react-native';
import {
  getDeathCertificateNumber,
  getMainRecordCowById,
  saveDeathCertificateInDB,
  setDeathCertificateCounter,
} from '../../../../../store/actionCreators';
import {useNavigation} from '@react-navigation/native';

export const useDescarte = ({currentCow}: IUseDescarteProps): IUseDescarte => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [meatPrice, deathDocumentNumber] = useSelector((state: IAppState) => [
    state.Prices!.meatPrice!,
    state.deathCertificateCounterDocument!,
  ]);
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
  const [saved, setSaved] = useState<boolean>(false);
  const [deathCertificate, setDeathCertificate] = useState<IDeathCertificate>(
    DeathCertificateInitialState(currentCow, Number(edadMeses), meatPrice),
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

  const onChangeNecroptiaResponsable = (newResponsable: string) => {
    setDeathCertificate({
      ...deathCertificate,
      necroptiaResponsable: newResponsable,
    });
  };

  const onChangeDiagnosis = (newDiagnosis: string) => {
    setDeathCertificate({
      ...deathCertificate,
      deathDiagnosis: newDiagnosis,
    });
  };

  const validateDeathCertificate = (): boolean => {
    deathCertificate.witnesses.map(witness => {
      if (witness.fullName === '') {
        Alert.alert('Complete los nombres de los testigos');
        return false;
      }

      if (witness.possition === WORK_POSITIONS.EMPTY) {
        Alert.alert('Complete los cargos de los testigos');
        return false;
      }
    });

    if (deathCertificate.necroptiaResponsable === '') {
      Alert.alert('Complete el nombre del responsable de la necropcia');
      return false;
    }

    if (deathCertificate.deathDiagnosis === '') {
      Alert.alert('Complete el diagnostico de muerte');
      return false;
    }

    return true;
  };

  const saveDeathCertificate = () => {
    if (validateDeathCertificate()) {
      dispatch(saveDeathCertificateInDB(deathCertificate));
      // TODO: mandar la navegación a la paguina donde estan todos los registros de descarte
      navigation.navigate('StationScreen');
      dispatch(setDeathCertificateCounter(undefined));
    }
  };

  console.log('Document number sacado del selector -> ', deathDocumentNumber);

  useEffect(() => {
    if (isNil(deathDocumentNumber)) dispatch(getDeathCertificateNumber());
  }, []);

  return {
    markedD,
    setMarkedD,
    dayInfo,
    deathDocumentNumber,
    actions: {
      addOtherWitness,
      deleteWitness,
      saveDeathCertificate,
      InputWitnessesCardsActions: {
        onChangeNameWitness,
        onChangeWitnessWorkPossition,
        witnesses: deathCertificate.witnesses,
      },
      responsableDiagnosisActions: {
        onChangeNecroptiaResponsable,
        onChangeDiagnosis,
      },
    },
    deathCertificate,
  };
};
