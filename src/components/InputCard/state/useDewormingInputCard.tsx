import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {UnitTypeEnum} from '../../../constants/PresentationEnum';
import {
  checkDewormingFormValues,
  EMPTY_DEWORMING,
  setDewormingFormValue,
} from '../../../constants/SanityRecords';
import {IDrug} from '../../../interfaces/Drug.interface';
import {initialDewormingValidation} from '../../../interfaces/newCowForm';
import {IDewormingFormKeys} from '../../../interfaces/SanityRecords';
import {IDewormingForm} from '../../../screens/TabsCowScreen/Sanity/Desparacitaciones/state/useDeworming';
import {saveDeworming} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';

interface IUseDewormingInputCard {
  drugsIdList: {_id: string; name: string}[];
  doseUnit: UnitTypeEnum;
  actions: {
    changeDoseUnit: (drugId: string) => void;
    setValueToDewormingForm: (
      property: IDewormingFormKeys,
      value: any,
      number: boolean,
    ) => void;
    onSaveDewormingForm: () => void;
  };
  isFormValid: boolean;
}

interface IUseDewormingInputCardProps {
  drugs: IDrug[];
  dewormingForm: IDewormingForm;
  setDewormingForm: React.Dispatch<React.SetStateAction<IDewormingForm>>;
}

export const useDewormingInputCard = ({
  drugs,
  dewormingForm,
  setDewormingForm,
}: IUseDewormingInputCardProps): IUseDewormingInputCard => {
  const dispatch = useDispatch();
  const naviation = useNavigation();

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
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const changeDoseUnit = (drugId: string) => {
    const drug = drugsIdList.find(drug => drug._id === drugId);

    setDoseUnit(drug!.unitType);
  };

  const setValueToDewormingForm = (
    property: IDewormingFormKeys,
    value: any,
    number: boolean,
  ) => {
    setDewormingForm(prevValue =>
      setDewormingFormValue(prevValue, value, property, number),
    );
  };

  const validateForm = () => {
    checkDewormingFormValues(setDewormingForm, setIsFormValid);
  };

  const onSaveDewormingForm = () => {
    validateForm();
  };

  const navigateToMainRecord = () => {
    naviation.navigate('MainRecord');
  };

  const resetForm = () => {
    setDewormingForm({
      formValidate: initialDewormingValidation,
      newDeworming: EMPTY_DEWORMING,
    });
  };

  useEffect(() => {
    if (isFormValid === true) {
      dispatch(
        saveDeworming(
          idVaca,
          dewormingForm.newDeworming,
          navigateToMainRecord,
          resetForm,
        ),
      );
      setIsFormValid(false);
    }
  }, [isFormValid]);

  return {
    drugsIdList,
    doseUnit,
    actions: {
      changeDoseUnit,
      setValueToDewormingForm,
      onSaveDewormingForm,
    },
    isFormValid,
  };
};
