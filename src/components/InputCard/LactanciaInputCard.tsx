import React, {Dispatch, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {ModalInput} from '../CustomInput/ModalInput';
import {CategoryLogoInput} from '../../assets/CategoryLogoInput';
import {ICow} from '../../interfaces/CowInterface';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {CigueniaIcon} from '../../assets/CigueniaIcon';
import {LactanciaIcon} from '../../assets/LactanciaIcon';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {initialFormLactancia} from '../../interfaces/newCowForm';
import {useLactanciaInputCard} from './state/useLactanciaInputCard';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {LactanciaDuration} from '../../assets/LactanciaDuration';
import {ProductionIcon} from '../../assets/ProductionIcon';
import {DiasSecos} from '../../assets/DiasSecos';

interface ILactanciaInputCard {
  value: ICow;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  //openMomDataModal: Dispatch<React.SetStateAction<boolean>>;
  //setOpenDadDataModal: Dispatch<React.SetStateAction<boolean>>;
  onSave: () => void;
  isSaved: boolean;
}

export const LactanciaInputCard = (props: ILactanciaInputCard) => {
  const {value, setValue, onSave, isSaved} = props;
  const form = useRef(initialFormLactancia);
  const {validateForm} = useLactanciaInputCard({value, form});
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
          logo={<LactanciaIcon />}
          label="N° DE LACTANCIAS"
          property={ICowKeys.numeroLactancias}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask=""
          numKeyboard={true}
          isNumber={true}
          errorText="Ingrese numero de lactancias"
          error={form.current.numeroLactancias}
        />
        <ModalInput
          logo={<LactanciaDuration />}
          label="DIAS LACTANCIA PROM."
          property={ICowKeys.duraciónLactanciaPromedio}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask=""
          numKeyboard={true}
          isNumber={true}
          errorText="Ingrese días promedio"
          error={form.current.duraciónLactanciaPromedio}
        />
        <ModalInput
          logo={<ProductionIcon />}
          label="PROD PROM LACTANCIA."
          property={ICowKeys.produccionPromedioLactancias}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask=""
          numKeyboard={true}
          isNumber={true}
          errorText="Ingrese promedio de lactancia"
          error={form.current.produccionPromedioLactancias}
        />
        <ModalInput
          logo={<DiasSecos />}
          label="DÍAS SECOS TOTALES."
          property={ICowKeys.diasSecosTotales}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask=""
          numKeyboard={true}
          isNumber={true}
          errorText="Ingrese días secos totales"
          error={form.current.diasSecosTotales}
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
