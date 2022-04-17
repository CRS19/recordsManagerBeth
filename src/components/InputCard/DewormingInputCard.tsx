import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {checkDewormingFormValidation} from '../../constants/SanityRecords';
import {IDrug} from '../../interfaces/Drug.interface';
import {IDeworming} from '../../interfaces/SanityRecords';
import {IDewormingForm} from '../../screens/TabsCowScreen/Sanity/Desparacitaciones/state/useDeworming';
import {styles} from '../../theme/GlobalStyles';
import {getDateOfDay} from '../../utils/time-utils';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {AplicationWayPicker} from '../CustomInput/AplicationWayPicker';
import {DewormingInputDose} from '../CustomInput/DewormingInputDose';
import {InputTextView} from '../Views/InputTextView';
import {DewormingActivePInputText} from './DewormingActivePInputText';
import {DewormingPicker} from './DewormingPicker';
import {useDewormingInputCard} from './state/useDewormingInputCard';

interface IDewormingInputCardProps {
  dewormingValues: IDeworming;
  dewormingForm: IDewormingForm;
  drugs: IDrug[];
  setDewormingForm: React.Dispatch<React.SetStateAction<IDewormingForm>>;
  setOpenDewormingDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DewormingInputCard = ({
  dewormingForm,
  setDewormingForm,
  drugs,
  setOpenDewormingDatePicker,
}: IDewormingInputCardProps) => {
  const {drugsIdList, doseUnit, actions} = useDewormingInputCard({
    drugs,
    dewormingForm,
    setDewormingForm,
  });

  const isCardInValid = checkDewormingFormValidation(dewormingForm);

  return (
    <View>
      <View
        style={{
          marginRight: 22,
          height: 330,
          width: 313,
          backgroundColor: '#C7E8B3',
          padding: 15,
          paddingLeft: 20,
          elevation: 5,
          borderWidth: isCardInValid ? 2 : 0,
          borderColor: 'red',
        }}>
        <TouchableOpacity
          style={{marginVertical: 3, right: 5}}
          onPress={() => setOpenDewormingDatePicker(true)}>
          <InputTextView
            label={'FECHA DESPARACITACIÓN'}
            value={getDateOfDay(dewormingForm.newDeworming.created)}
          />
          {!!dewormingForm.formValidate.created ? (
            <View style={{position: 'absolute', right: -10, bottom: 0}}>
              <Text style={styles.ErrorTextHelper}>
                Ingrese una fecha válida
              </Text>
            </View>
          ) : (
            <View />
          )}
        </TouchableOpacity>
        <DewormingPicker
          value={dewormingForm.newDeworming}
          setDewormingForm={setDewormingForm}
          changeDoseUnit={actions.changeDoseUnit}
          itemList={drugsIdList}
          error={dewormingForm.formValidate.drugId}
          errorMessage={'Porfavor seleccione un desparacitante'}
        />
        <DewormingInputDose
          value={dewormingForm.newDeworming.dosis}
          label={`DOSIS (${doseUnit})`}
          error={dewormingForm.formValidate.dosis}
          errorText="Ingrese una dosis válida"
          setValue={setDewormingForm}
        />
        <AplicationWayPicker
          value={dewormingForm.newDeworming}
          setDewormingValue={setDewormingForm}
          error={dewormingForm.formValidate.applicationWay}
          errorMessage={'Seleccione una vía de aplicación'}
        />
        <DewormingActivePInputText
          value={dewormingForm.newDeworming.activePrincipal}
          label="PRINCIPIO ACTIVO"
          error={dewormingForm.formValidate.activePrincipal}
          errorText="Ingrese un principio activo"
          setValue={setDewormingForm}
        />
      </View>
      <View style={{marginTop: 20}}>
        <BorderButtom
          title="Guardar"
          onPress={() => actions.onSaveDewormingForm()}
        />
      </View>
    </View>
  );
};
