import React, {Dispatch, useRef} from 'react';
import {View} from 'react-native';
import {LogoHembraInput} from '../../assets/LogoHembraInput';
import {LogoMachoInput} from '../../assets/LogoMachoInput';
import {NameInputLabel} from '../../assets/NameInputLabel';
import {NumeroAreteInput} from '../../assets/NumeroAreteInput';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {ICow} from '../../interfaces/CowInterface';
import {ModalInput} from '../CustomInput/ModalInput';
import {BirthDateInput} from '../../assets/BirthDateInput';
import {RazaLogoInput} from '../../assets/RazaLogoInput';
import {PesoLogoInput} from '../../assets/PesoLogoInput';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {styles} from '../../theme/GlobalStyles';
import {initialForm} from '../../interfaces/newCowForm';
import {useInputCardState} from './state/useInputCardState';
import {ChooseSexIcon} from '../../assets/ChooseSexIcon';

interface IInputCard {
  value: ICow;
  openSexChooseModal: Dispatch<React.SetStateAction<boolean>>;
  openDatePickerModal: Dispatch<React.SetStateAction<boolean>>;
  openRazaPickerModal: Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  setPropertyFecha: Dispatch<React.SetStateAction<ICowKeys>>;
  onSave: () => void;
  isSaved: boolean;
}

export const InputCard = (props: IInputCard) => {
  const {
    value,
    openSexChooseModal,
    setValue,
    openDatePickerModal,
    openRazaPickerModal,
    onSave,
    isSaved,
    setPropertyFecha,
  } = props;
  const form = useRef(initialForm);
  const {validateForm} = useInputCardState({value, form});

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
          logo={
            value.sexo === '' ? (
              <ChooseSexIcon />
            ) : value.sexo === 'MACHO' ? (
              <LogoMachoInput />
            ) : (
              <LogoHembraInput />
            )
          }
          label="SEXO"
          property={ICowKeys.sexo}
          initialValue={value}
          setValue={setValue}
          hasMask={false}
          mask="[A][-----------------------------------------------------]"
          openModal={openSexChooseModal}
          editable={!isSaved}
          errorText="Seleccione un sexo"
          error={form.current.sexo}
        />
        <ModalInput
          logo={<NameInputLabel />}
          label="NOMBRE"
          property={ICowKeys.nombre}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask="[A][-----------------------------------------------------]"
          editable={!isSaved}
          errorText="Ingrese un nombre"
          error={form.current.nombre}
        />
        <ModalInput
          logo={<NumeroAreteInput />}
          label="N° DE ARETE"
          property={ICowKeys.numeroDeArete}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask="[0][----------]"
          numKeyboard={true}
          editable={!isSaved}
          errorText="Ingrese un Arete"
          error={form.current.numeroDeArete}
        />
        <ModalInput
          logo={<BirthDateInput />}
          label="FECHA DE NACIMIENTO"
          property={ICowKeys.fechaDeNacimiento}
          initialValue={value}
          setValue={setValue}
          hasMask={false}
          openModal={openDatePickerModal}
          editable={!isSaved}
          errorText="Seleccione una fecha"
          setPropertyFecha={setPropertyFecha}
          error={form.current.fechaDeNacimiento}
        />
        <ModalInput
          logo={<RazaLogoInput />}
          label="RAZA"
          property={ICowKeys.raza}
          initialValue={value}
          setValue={setValue}
          hasMask={false}
          openModal={openRazaPickerModal}
          editable={!isSaved}
          errorText="Seleccione una raza"
          error={form.current.raza}
        />
        <ModalInput
          logo={<PesoLogoInput />}
          label="PESO AL NACIMIENTO"
          property={ICowKeys.pesoNacimiento}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask=""
          numKeyboard={true}
          isNumber={true}
          editable={!isSaved}
          errorText="Ingrese un peso"
          error={form.current.pesoNacimiento}
          defaultValue={`${value.pesoNacimiento} Kg`}
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
