import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {checkCardValidation} from '../../constants/SanityRecords';
import {IDrug} from '../../interfaces/Drug.interface';
import {IDrugDiagnosisKey} from '../../interfaces/SanityRecords';
import {drugForm} from '../../screens/TabsCowScreen/Sanity/Diagnostico/state/useDiagnosis';
import {AplicationWayPicker} from '../CustomInput/AplicationWayPicker';
import {DrugPicker} from '../CustomInput/DrugPicker';
import {GeneralNumberInput} from '../CustomInput/GeneralNumberInput';
import {InputTextView} from '../Views/InputTextView';
import {useDiagonsisInputCard} from './state/useDiagonsisInputCard';

export interface IDiagonosisInputCard {
  form: drugForm;
  drugs: IDrug[];
  formIndex: number;
  setForm: React.Dispatch<React.SetStateAction<drugForm[]>>;
  openFrequencyModal: (index: number) => void;
}

export const DiagnosisInputCard = ({
  form,
  formIndex,
  setForm,
  drugs,
  openFrequencyModal,
}: IDiagonosisInputCard) => {
  const {drugsIdList, doseUnit, actions} = useDiagonsisInputCard({
    drugs,
    setForm,
    formIndex,
  });

  const doseTotalCalculated =
    form.newDrug.frequency.times * form.newDrug.duration * form.newDrug.dose;

  const isCardInValid = checkCardValidation(form);

  return (
    <View
      style={{
        marginRight: 22,
        height: 361,
        width: 313,
        backgroundColor: '#D8D8D8',
        padding: 15,
        paddingLeft: 20,
        elevation: 5,
        borderWidth: isCardInValid ? 2 : 0,
        borderColor: 'red',
      }}>
      {/* Primiero obtener el id de todas las drogas en la base de datos y abrirlos en un picker */}
      <DrugPicker
        value={form.newDrug}
        setValue={setForm}
        changeDoseUnit={actions.changeDoseUnit}
        valueIndex={formIndex}
        itemsList={drugsIdList}
        error={form.formValidate.seleccioneFarmaco}
        errorMessage={'Seleccione un farmaco'}
      />
      <GeneralNumberInput
        value={form.newDrug}
        setValue={actions.setDrugValue}
        valueIndex={formIndex}
        property={IDrugDiagnosisKey.DOSE}
        label={`DOSIS (${doseUnit})`}
        error={form.formValidate.dose}
        errorText={'Ingrese un farmaco'}
      />
      <TouchableOpacity
        style={{right: 4}}
        onPress={() => openFrequencyModal(formIndex)}>
        <InputTextView
          label="FRECUENCIA"
          value={`${form.newDrug.frequency.times} por ${form.newDrug.frequency.at}`}
        />
      </TouchableOpacity>
      <GeneralNumberInput
        value={form.newDrug}
        setValue={actions.setDrugValue}
        valueIndex={formIndex}
        property={IDrugDiagnosisKey.DURATION}
        label={'DURACIÓN'}
        error={form.formValidate.duration}
        errorText={'Ingrese una duración'}
      />
      <View style={{right: 5}}>
        <InputTextView
          label={`TOTAL (${doseUnit})`}
          value={`${doseTotalCalculated}`}
        />
      </View>
      <AplicationWayPicker
        value={form.newDrug}
        setValue={setForm}
        valueIndex={formIndex}
        error={form.formValidate.applicationWay}
        errorMessage={'Seleccione una vía de aplicación'}
      />
    </View>
  );
};
