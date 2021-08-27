import React, {Dispatch} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {ModalInput} from '../CustomInput/ModalInput';
import {CategoryLogoInput} from '../../assets/CategoryLogoInput';
import {ICow} from '../../interfaces/CowInterface';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {EdadLogoInput} from '../../assets/EdadLogoInput';

interface IInputCardCaracteristics {
  value: ICow;
  //openSexChooseModal: Dispatch<React.SetStateAction<boolean>>;
  //openDatePickerModal: Dispatch<React.SetStateAction<boolean>>;
  //openRazaPickerModal: Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  onSave: () => void;
}

export const InputCardCaracteristics = (props: IInputCardCaracteristics) => {
  const {value, setValue, onSave} = props;

  return (
    <View style={styles.InputCardCaracteristic}>
      <Text>Input card caracteristicas</Text>
      <ModalInput
        logo={<CategoryLogoInput />}
        label="CATEGORIA"
        property={ICowKeys.categoria}
        initialValue={value}
        setValue={setValue}
        hasMask={true}
        mask="[A][-----------------------------------------------------]"
        editable={false}
      />
      <ModalInput
        logo={<EdadLogoInput />}
        label="EDAD"
        property={ICowKeys.nombre}
        initialValue={value}
        setValue={setValue}
        hasMask={false}
        mask="[A][-----------------------------------------------------]"
      />
    </View>
  );
};
