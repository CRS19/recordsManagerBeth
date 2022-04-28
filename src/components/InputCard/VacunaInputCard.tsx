import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {checkVacunaFormValidation} from '../../constants/SanityRecords';
import {IDrug} from '../../interfaces/Drug.interface';
import {IVaccines} from '../../interfaces/SanityRecords';
import {IVacunaForm} from '../../screens/TabsCowScreen/Sanity/Vacunas/state/useVacunas';
import {getDateOfDay} from '../../utils/time-utils';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {VacunaInputDosis} from '../CustomInput/VacunaInputDosis';
import {VacunaPicker} from '../CustomInput/VacunaPicker';
import {InputTextView} from '../Views/InputTextView';
import {DiseasePicker} from './DiseasePicker';
import {useVacunaInputCard} from './state/useVacunaInputCard';

interface IVacunaInputCardProps {
  vacuna: IVaccines;
  vacunForm: IVacunaForm;
  drugs: IDrug[];
  setVacunaForm: React.Dispatch<React.SetStateAction<IVacunaForm>>;
  setOpenVacunaDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VacunaInputCard = ({
  vacuna,
  drugs,
  vacunForm,
  setVacunaForm,
  setOpenVacunaDatePicker,
}: IVacunaInputCardProps) => {
  const {drugsIdList, diseaseVacunaList, doseUnit, actions} =
    useVacunaInputCard({
      drugs,
      vacunForm,
      setVacunaForm,
    });
  const isCardInValid = checkVacunaFormValidation(vacunForm);

  return (
    <View>
      <View
        style={{
          marginRight: 22,
          height: 280,
          width: 313,
          backgroundColor: '#BCE1FF',
          padding: 15,
          paddingLeft: 20,
          elevation: 5,
          borderWidth: isCardInValid ? 2 : 0,
          borderColor: 'red',
        }}>
        <DiseasePicker
          value={vacunForm.newVacuna}
          setValue={setVacunaForm}
          changeDoseUnit={actions.changeDoseUnit}
          itemsList={diseaseVacunaList}
          error={vacunForm.formValidate.disease}
          errorMessage={'Seleccione un fármaco'}
        />
        <TouchableOpacity
          style={{marginVertical: 3, right: 5}}
          onPress={() => setOpenVacunaDatePicker(true)}>
          <InputTextView
            label={'FECHA DE VACUNA'}
            value={getDateOfDay(vacunForm.newVacuna.created)}
          />
        </TouchableOpacity>
        <VacunaPicker
          value={vacunForm.newVacuna}
          setValue={setVacunaForm}
          changeDoseUnit={actions.changeDoseUnit}
          itemsList={drugsIdList}
          error={vacunForm.formValidate.drugId}
          errorMessage={'Seleccione un fármaco'}
        />
        <VacunaInputDosis
          value={vacunForm.newVacuna.dosis}
          label={'DOSIS (ml)'}
          setValue={setVacunaForm}
          prefix={'ml'}
          error={vacunForm.formValidate.dosis}
          errorText={'Ingrese una dosis valida'}
        />
      </View>
      <View style={{marginVertical: 20}}>
        <BorderButtom title="Guardar" onPress={() => actions.onSaveVacuna()} />
      </View>
    </View>
  );
};
