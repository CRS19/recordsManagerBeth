import React, {Dispatch, useState} from 'react';
import {
  View,
  Text,
  TextInputBase,
  TextInputComponent,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Value} from 'react-native-reanimated';
import {LogoHembraInput} from '../../assets/LogoHembraInput';
import {LogoMacho} from '../../assets/LogoMacho';
import {LogoMachoInput} from '../../assets/LogoMachoInput';
import {NameInputLabel} from '../../assets/NameInputLabel';
import {NumeroAreteInput} from '../../assets/NumeroAreteInput';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {ICow} from '../../interfaces/CowInterface';
import {ModalInput} from '../CustomInput/ModalInput';
import {ChooseSexModal} from '../Modals/ChooseSexModal';
import {BirthDateInput} from '../../assets/BirthDateInput';
import {RazaLogoInput} from '../../assets/RazaLogoInput';
import {PesoLogoInput} from '../../assets/PesoLogoInput';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {styles} from '../../theme/GlobalStyles';

interface IInputCard {
  value: ICow;
  openSexChooseModal: Dispatch<React.SetStateAction<boolean>>;
  openDatePickerModal: Dispatch<React.SetStateAction<boolean>>;
  openRazaPickerModal: Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
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
  } = props;

  return (
    <View
      style={{
        ...styles.InputCardCaracteristic,
        backgroundColor: isSaved ? '#03DAC5' : 'white',
      }}>
      <View>
        <ModalInput
          logo={
            value.sexo === '' || value.sexo === 'MACHO' ? (
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
        />
        <ModalInput
          logo={<PesoLogoInput />}
          label="PESO"
          property={ICowKeys.pesoActual}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask=""
          numKeyboard={true}
          isNumber={true}
          editable={!isSaved}
        />
      </View>
      {!isSaved ? (
        <View style={{marginTop: 15}}>
          <BorderButtom
            title="Guardar"
            onPress={() => {
              onSave();
            }}
          />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};
