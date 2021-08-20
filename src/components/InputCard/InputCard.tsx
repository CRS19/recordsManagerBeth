import React, {useState} from 'react';
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
import {ModalInput} from '../CustomInput/ModalInput';
import {ChooseSexModal} from '../Modals/ChooseSexModal';

interface IInputCard {
  sexValue: string;
}

export const InputCard = (props: IInputCard) => {
  const {sexValue} = props;
  // Input sexo
  const [openChooseSexModal, setOpenChooseSexModal] = useState<boolean>(false);
  const [sexo, setSexo] = useState('');

  console.log(sexo);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Input card</Text>
      <ModalInput
        logo={
          sexo === '' || sexo === 'MACHO' ? (
            <LogoMachoInput />
          ) : (
            <LogoHembraInput />
          )
        }
        label="Sexo"
        setValue={setSexo}
        initialValue={sexo}
        hasMask={false}
        mask="[A][-----------------------------------------------------]"
        openModal={setOpenChooseSexModal}
      />

      <ChooseSexModal
        openCloseModal={openChooseSexModal}
        onCloseModal={setOpenChooseSexModal}
        setSexo={setSexo}
      />
    </View>
  );
};
