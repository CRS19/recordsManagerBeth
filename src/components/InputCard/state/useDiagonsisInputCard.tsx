import React, {useEffect, useState} from 'react';
import {UnitTypeEnum} from '../../../constants/PresentationEnum';
import {setPreviusValueInthatIndexGeneral} from '../../../constants/SanityRecords';
import {IDrug} from '../../../interfaces/Drug.interface';
import {IDrugDiagnosisKey} from '../../../interfaces/SanityRecords';
import {drugForm} from '../../../screens/TabsCowScreen/Sanity/Diagnostico/state/useDiagnosis';

export interface IUseDiagnosisInputCardProps {
  drugs: IDrug[];
  formIndex: number;
  setForm: React.Dispatch<React.SetStateAction<drugForm[]>>;
}

export interface IUseDiagnosisInputCard {
  drugsIdList: {_id: string; name: string}[];
  doseUnit: UnitTypeEnum;
  actions: {
    changeDoseUnit: (drugId: string, index: number) => void;
    setDrugValue: (
      index: number,
      property: IDrugDiagnosisKey,
      value: any,
      number: boolean,
    ) => void;
  };
}

export const useDiagonsisInputCard = ({
  drugs,
  formIndex,
  setForm,
}: IUseDiagnosisInputCardProps): IUseDiagnosisInputCard => {
  const drugsIdList = [
    {_id: '', name: '', unitType: UnitTypeEnum.EMPTY},
    ...drugs.map(drug => ({
      _id: drug._id!,
      name: drug.name,
      unitType: drug.unitType,
    })),
  ];
  const [doseUnit, setDoseUnit] = useState<UnitTypeEnum>(UnitTypeEnum.EMPTY);

  const changeDoseUnit = (drugId: string, index: number) => {
    const drug = drugsIdList.find(drug => drug._id === drugId);
    setDoseUnit(drug!.unitType);
  };

  const setDrugValue = (
    index: number,
    property: IDrugDiagnosisKey,
    value: any,
    number: boolean,
  ) => {
    setForm(prevValue =>
      setPreviusValueInthatIndexGeneral(
        prevValue,
        index,
        value,
        property,
        number,
      ),
    );
  };

  useEffect(() => {
    if (doseUnit !== '') {
      setForm(prevValue =>
        setPreviusValueInthatIndexGeneral(
          prevValue,
          formIndex,
          doseUnit,
          IDrugDiagnosisKey.DOSE_UNIT,
          false,
        ),
      );
    }
  }, [doseUnit]);

  return {drugsIdList, doseUnit, actions: {changeDoseUnit, setDrugValue}};
};
