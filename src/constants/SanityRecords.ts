import {drugForm} from './../screens/TabsCowScreen/Sanity/Diagnostico/state/useDiagnosis';
import {getTimestamp} from './../utils/time-utils';
import {
  IDiagnosis,
  IDrugDiagnosisKey,
  applicationWayEnum,
  frequencyDiagnosisEnum,
  IDrugDiagnosis,
  IVaccines,
  diseasesEnum,
  IVacunaFormKeys,
} from './../interfaces/SanityRecords';
import {cloneDeep, defaultTo, set} from 'lodash';
import {IDrug} from '../interfaces/Drug.interface';
import {IVacunaForm} from '../screens/TabsCowScreen/Sanity/Vacunas/state/useVacunas';

export const EMPTY_ADD_DRUG = {
  drugId: '',
  dose: 0,
  frequency: {times: 0, at: frequencyDiagnosisEnum.EMPTY},
  duration: 0,
  total: 0,
  applicationWay: applicationWayEnum.EMPTY,
};

export const EMPTY_DIAGNOSIS: IDiagnosis = {
  diagnosisDescriptrion: '',
  created: getTimestamp(),
  drugs: [],
};

export const EMPTY_VACUNA: IVaccines = {
  created: 0,
  drugId: '',
  disease: diseasesEnum.BRUCELOSIS,
  comercialName: '',
  dosis: 0,
};

export const FREQUENCY_PICKER_ITEMS = [
  {
    value: frequencyDiagnosisEnum.EMPTY,
    label: 'SELECCIONE FRECUENCIA',
  },
  {
    value: frequencyDiagnosisEnum.DAILY,
    label: 'AL DÍA',
  },
  {
    value: frequencyDiagnosisEnum.WEEKLY,
    label: 'A LA SEMANA',
  },
  {
    value: frequencyDiagnosisEnum.MONTHLY,
    label: 'AL MES',
  },
];

export const APPLICATION_WAY_PICKER_ITEMS = [
  {
    value: applicationWayEnum.EMPTY,
    label: 'SELECCIONE UNA VIA DE APLICACIÓN',
  },
  {
    value: applicationWayEnum.INTRAMUSCULAR,
    label: 'INTRAMUSCULAR',
  },
  {
    value: applicationWayEnum.INTRAVENOUS,
    label: 'INTRAVENOSA',
  },
  {
    value: applicationWayEnum.ORAL,
    label: 'ORAL',
  },
  {
    value: applicationWayEnum.PERITONEAL,
    label: 'PERITONEAL',
  },
  {
    value: applicationWayEnum.SUBCUTANEOUS,
    label: 'SUBCUTANEA',
  },
];

export const setPreviusValueInthatIndex = (
  previusValue: drugForm[],
  index: number,
  itemValue: string,
): drugForm[] => {
  let valueClone = cloneDeep(previusValue);
  valueClone[index].newDrug.drugId = itemValue;

  return valueClone;
};

export const setPreviusValueInthatIndexGeneral = (
  previusValue: drugForm[],
  index: number,
  itemValue: string,
  property: IDrugDiagnosisKey,
  number: boolean,
): drugForm[] => {
  let valueClone = cloneDeep(previusValue);
  set(
    valueClone[index].newDrug,
    property,
    number ? Number(itemValue) : String(itemValue),
  );

  return valueClone;
};

export const setPreviusValue = (
  previusFormValue: IVacunaForm,
  itemValue: string | number,
  property: IVacunaFormKeys,
  number: boolean,
): IVacunaForm => {
  let valueClone = cloneDeep(previusFormValue);

  set(
    valueClone.newVacuna,
    property,
    number ? Number(itemValue) : String(itemValue),
  );

  return valueClone;
};

export const setFrequencyValues = (
  previusValue: drugForm[],
  index: number,
  itemValue: {times: number; at: frequencyDiagnosisEnum},
): drugForm[] => {
  let valueClone = cloneDeep(previusValue);
  set(valueClone[index].newDrug, IDrugDiagnosisKey.FREQUENCY, itemValue);

  return valueClone;
};

export const checkCardValidation = (form: drugForm): boolean => {
  const validations = Object.values(form.formValidate).map(item => !!item);

  const resp = validations.find(el => el === true);

  return defaultTo(resp, false);
};

export const checkVacunaFormValidation = (form: IVacunaForm): boolean => {
  const validations = Object.values(form.formValidate).map(item => !!item);

  const resp = validations.find(el => el === true);

  return defaultTo(resp, false);
};

export const checkVacunaFormValues = (
  setVacunaForm: React.Dispatch<React.SetStateAction<IVacunaForm>>,
  setIsFormValid: React.Dispatch<React.SetStateAction<boolean>>,
) =>
  setVacunaForm(vacunaForm => {
    let formValues = cloneDeep(vacunaForm.newVacuna);
    let formValidationValues = cloneDeep(vacunaForm.formValidate);
    let isFormValid: boolean;

    formValues.comercialName === ''
      ? set(formValidationValues, 'comercialName', true)
      : set(formValidationValues, 'comercialName', false);

    formValues.created === 0
      ? set(formValidationValues, 'created', true)
      : set(formValidationValues, 'created', false);

    formValues.disease === diseasesEnum.EMPTY
      ? set(formValidationValues, 'disease', true)
      : set(formValidationValues, 'disease', false);

    formValues.dosis === 0
      ? set(formValidationValues, 'dosis', true)
      : set(formValidationValues, 'dosis', false);

    formValues.drugId === ''
      ? set(formValidationValues, 'drugId', true)
      : set(formValidationValues, 'drugId', false);

    isFormValid = !Object.values(formValidationValues).some(el => el === true);

    if (isFormValid) setIsFormValid(true);

    console.log(JSON.stringify(formValues, null, 3));

    return {formValidate: formValidationValues, newVacuna: formValues};
  });

export const changeValidatationValues = (
  drugsForms: drugForm[],
): drugForm[] => {
  return drugsForms.map(validateAllForms);
};

export const validateAllForms = (form: drugForm): drugForm => {
  let formValues = cloneDeep(form.newDrug);
  let formValidation = cloneDeep(form.formValidate);

  formValues.drugId === ''
    ? set(formValidation, 'seleccioneFarmaco', true)
    : set(formValidation, 'seleccioneFarmaco', false);

  formValues.dose === 0
    ? set(formValidation, 'dose', true)
    : set(formValidation, 'dose', false);

  formValues.frequency.at === frequencyDiagnosisEnum.EMPTY &&
  formValues.frequency.times === 0
    ? set(formValidation, 'frequency', true)
    : set(formValidation, 'frequency', false);

  formValues.duration === 0
    ? set(formValidation, 'duration', true)
    : set(formValidation, 'duration', false);

  formValues.applicationWay === applicationWayEnum.EMPTY
    ? set(formValidation, 'applicationWay', true)
    : set(formValidation, 'applicationWay', false);

  return {formValidate: formValidation, newDrug: formValues};
};

export const buildMainDiagnosis = (
  prevValue: IDiagnosis,
  drugForm: drugForm[],
  diagnosisDescription: string,
): IDiagnosis => {
  const newDiagnosis = cloneDeep(prevValue);

  const drugs = drugForm.map(drug => ({
    ...drug.newDrug,
    total:
      drug.newDrug.frequency.times * drug.newDrug.duration * drug.newDrug.dose,
  }));

  set(newDiagnosis, 'diagnosisDescriptrion', diagnosisDescription);
  set(newDiagnosis, 'created', getTimestamp());
  set(newDiagnosis, 'drugs', drugs);

  return newDiagnosis;
};

export const checkDurgsForms = (drugForm: drugForm[]): boolean => {
  const booleanResponses = drugForm.map(drugs => checkCardValidation(drugs));

  return !!booleanResponses.find(resp => resp === true);
};

export const putDiagnosisTextInNewDiagnosis = (
  prevValue: IDiagnosis,
  diagnosisText: string,
): IDiagnosis => {
  const newDiagnosis = cloneDeep(prevValue);

  set(newDiagnosis, 'diagnosisDescriptrion', diagnosisText);

  return newDiagnosis;
};

export const getTotalByDrug = (
  drugs: IDrugDiagnosis[],
  drugsList: IDrug[],
): string => {
  return drugs
    .map(
      drug =>
        ` ${drug.total} ${
          drugsList.find(drugItem => drugItem._id === drug.drugId)!.unitType
        } de ${drugsList.find(drugItem => drugItem._id === drug.drugId)!.name}`,
    )
    .join('\n');
};
