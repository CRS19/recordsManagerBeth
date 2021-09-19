import React, {Dispatch, useRef, useState} from 'react';
import {View} from 'react-native';
import {AbortosIcon} from '../../assets/AbortosIcon';
import {AgeFirstPart} from '../../assets/AgeFirstPart';
import {CigueniaIcon} from '../../assets/CigueniaIcon';
import {FechaUltimoPartoIcon} from '../../assets/FechaUltimoPartoIcon';
import {GestaciónDaysIcon} from '../../assets/GestaciónDaysIcon';
import {AgeEnum} from '../../constants/ageTypeEnum';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {ICow} from '../../interfaces/CowInterface';
import {initialFormGestation} from '../../interfaces/newCowForm';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {ModalInput} from '../CustomInput/ModalInput';
import {useGestacionInputCard} from './state/useGestacionInputCard';

interface IGestacionInputCard {
  value: ICow;
  openEdadPrimerPartoModal: Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  setPropertyFecha: Dispatch<React.SetStateAction<ICowKeys>>;
  openDatePickerModal: Dispatch<React.SetStateAction<boolean>>;
  onSave: () => void;
  isSaved: boolean;
}

export const GestacionInputCard = (props: IGestacionInputCard) => {
  const {
    value,
    setValue,
    openEdadPrimerPartoModal,
    onSave,
    isSaved,
    setPropertyFecha,
    openDatePickerModal,
  } = props;

  const edadMeses = value.vacaInfo!.edadPrimerParto.months;
  const edadAños = value.vacaInfo!.edadPrimerParto.years;
  const edadMesesA = value.vacaInfo!.edadPrimerParto.months + 12 * edadAños;
  const edadDiasM = value.vacaInfo!.edadPrimerParto.days + 30 * edadMesesA;

  const [ageType, setageType] = useState<AgeEnum>(AgeEnum.MESES_DIAS);
  const form = useRef(initialFormGestation);
  const {validateForm} = useGestacionInputCard({value, form});

  const onSaveForm = () => {
    validateForm();
    if (!Object.entries(form.current).some(el => el[1] === true)) {
      onSave();
    }
  };

  return (
    <View
      style={{
        ...styles.InputCardCaracteristic,
        backgroundColor: isSaved ? '#03DAC5' : 'white',
      }}>
      <View>
        <ModalInput
          logo={<AbortosIcon />}
          label="N° DE ABORTOS"
          property={ICowKeys.numeroDeAbortos}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask=""
          numKeyboard={true}
          isNumber={true}
          editable={!isSaved}
          errorText="Seleccione una fecha"
          error={form.current.numeroDeAbortos}
        />
        <ModalInput
          logo={<CigueniaIcon />}
          label="N° DE PARTOS"
          property={ICowKeys.numeroDePartos}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask=""
          numKeyboard={true}
          isNumber={true}
          editable={!isSaved}
          errorText="Ingrese un peso"
          error={form.current.numeroDePartos}
        />
        <ModalInput
          logo={<GestaciónDaysIcon />}
          label="DIAS DE GESTACIÓN PROM"
          property={ICowKeys.diasGestaciónPromedio}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask=""
          numKeyboard={true}
          isNumber={true}
          editable={!isSaved}
          errorText="Ingrese un peso"
          error={form.current.diasGestaciónPromedio}
        />
        <ModalInput
          logo={<AgeFirstPart />}
          label="EDAD"
          property={ICowKeys.edadPrimerParto}
          initialValue={value}
          setValue={setValue}
          defaultValue={
            ageType === AgeEnum.MESES_DIAS
              ? `${edadMesesA} MESES / ${edadDiasM} DIAS`
              : `${edadAños} AÑOS / ${edadMeses} MESES`
          }
          hasMask={false}
          hasLeftButtom={true}
          ageType={ageType}
          changeAge={setageType}
          editable={!isSaved}
          openModal={openEdadPrimerPartoModal}
          errorText="Ingrese edad"
          error={form.current.edadPrimerParto}
          mask="[A][-----------------------------------------------------]"
        />
        <ModalInput
          logo={<FechaUltimoPartoIcon />}
          label="FECHA ULTIMO PARTO"
          property={ICowKeys.fechaUltimoParto}
          initialValue={value}
          setValue={setValue}
          hasMask={false}
          openModal={openDatePickerModal}
          editable={!isSaved}
          setPropertyFecha={setPropertyFecha}
          errorText="Seleccione una fecha"
          error={form.current.fechaUltimoParto}
        />
      </View>
      {!isSaved ? (
        <View style={{marginTop: 15}}>
          <BorderButtom
            title="Guardar"
            onPress={() => {
              onSaveForm();
            }}
          />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};
