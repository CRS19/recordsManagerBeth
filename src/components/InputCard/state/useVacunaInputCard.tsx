import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {UnitTypeEnum} from '../../../constants/PresentationEnum';
import {
  checkVacunaFormValues,
  EMPTY_VACUNA,
  setPreviusValue,
} from '../../../constants/SanityRecords';
import {IDrug} from '../../../interfaces/Drug.interface';
import {initialVacunaValidation} from '../../../interfaces/newCowForm';
import {diseasesEnum, IVacunaFormKeys} from '../../../interfaces/SanityRecords';
import {IVacunaForm} from '../../../screens/TabsCowScreen/Sanity/Vacunas/state/useVacunas';
import {saveVacunaRecord} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';

export interface IUseVacunaInputCardProps {
  drugs: IDrug[];
  vacunForm: IVacunaForm;
  setVacunaForm: React.Dispatch<React.SetStateAction<IVacunaForm>>;
}

export interface useVacunaInputCard {
  drugsIdList: {_id: string; name: string}[];
  doseUnit: UnitTypeEnum;
  diseaseVacunaList: {
    _id: string;
    name: string;
  }[];
  actions: {
    changeDoseUnit: (drugId: string) => void;
    setValueToVacunaForm: (
      property: IVacunaFormKeys,
      value: any,
      number: boolean,
    ) => void;
    onSaveVacuna: () => void;
  };
}

export const useVacunaInputCard = ({
  drugs,
  vacunForm,
  setVacunaForm,
}: IUseVacunaInputCardProps): useVacunaInputCard => {
  const dispatch = useDispatch();
  const naviation = useNavigation();

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const drugsIdList = [
    {_id: '', name: '', unitType: UnitTypeEnum.EMPTY},
    ...drugs.map(drug => ({
      _id: drug._id!,
      name: drug.name,
      unitType: drug.unitType,
    })),
  ];
  const idVaca = useSelector((state: IAppState) => state.CurrentCow!.idVaca!);
  const [doseUnit, setDoseUnit] = useState<UnitTypeEnum>(UnitTypeEnum.EMPTY);

  const diseaseVacunaList = [
    {_id: '', name: ''},
    {_id: '1', name: diseasesEnum.BRUCELOSIS},
    {_id: '2', name: diseasesEnum.CARBUNCO_TRIPLE},
    {_id: '3', name: diseasesEnum.CUATRO_VIRAL},
    {_id: '4', name: diseasesEnum.FIEBRE_AFTOSA},
  ];

  const changeDoseUnit = (drugId: string) => {
    const drug = drugsIdList.find(drug => drug._id === drugId);
    setDoseUnit(drug!.unitType);
  };

  const setValueToVacunaForm = (
    property: IVacunaFormKeys,
    value: any,
    number: boolean,
  ) => {
    setVacunaForm(prevValue =>
      setPreviusValue(prevValue, value, property, number),
    );
  };

  const validateForm = () => {
    checkVacunaFormValues(setVacunaForm, setIsFormValid);
  };

  const onSaveVacuna = () => {
    validateForm();
  };

  useEffect(() => {
    if (isFormValid === true) {
      dispatch(saveVacunaRecord(idVaca, vacunForm.newVacuna));
      setIsFormValid(false);
      naviation.navigate('MainRecord');
      setVacunaForm({
        formValidate: initialVacunaValidation,
        newVacuna: EMPTY_VACUNA,
      });
    }
  }, [isFormValid]);

  return {
    drugsIdList,
    doseUnit,
    diseaseVacunaList,
    actions: {changeDoseUnit, setValueToVacunaForm, onSaveVacuna},
  };
};
