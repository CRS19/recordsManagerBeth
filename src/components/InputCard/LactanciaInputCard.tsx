import React, {Dispatch, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {ModalInput} from '../CustomInput/ModalInput';
import {CategoryLogoInput} from '../../assets/CategoryLogoInput';
import {ICow} from '../../interfaces/CowInterface';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {CigueniaIcon} from '../../assets/CigueniaIcon';
import {LactanciaIcon} from '../../assets/LactanciaIcon';

interface ILactanciaInputCard {
  value: ICow;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  //openMomDataModal: Dispatch<React.SetStateAction<boolean>>;
  //setOpenDadDataModal: Dispatch<React.SetStateAction<boolean>>;
  onSave: () => void;
}

export const LactanciaInputCard = (props: ILactanciaInputCard) => {
  const {value, setValue, onSave} = props;

  return (
    <View style={styles.InputCardCaracteristic}>
      <ModalInput
        logo={<LactanciaIcon />}
        label="N° DE LACTANCIAS"
        property={ICowKeys.categoria}
        initialValue={value}
        setValue={setValue}
        hasMask={true}
        mask="[A][-----------------------------------------------------]"
        editable={false}
      />
      <ModalInput
        logo={<CigueniaIcon />}
        label="LACTANCIA PROMEDIO DIAS"
        property={ICowKeys.categoria}
        initialValue={value}
        setValue={setValue}
        hasMask={true}
        mask="[A][-----------------------------------------------------]"
        editable={false}
      />
    </View>
  );
};
