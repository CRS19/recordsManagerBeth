import React, {Dispatch, useRef} from 'react';
import {View} from 'react-native';
import {DesteteIcon} from '../../assets/DesteteIcon';
import {PesoLogoInput} from '../../assets/PesoLogoInput';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {ICow} from '../../interfaces/CowInterface';
import {initialFormDestete} from '../../interfaces/newCowForm';
import {styles} from '../../theme/GlobalStyles';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {ModalInput} from '../CustomInput/ModalInput';
import {useInputCardDesteteState} from './state/useInputCardDesteteState';

interface IInputCardDestete {
  value: ICow;
  openDatePickerModal: Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  setPropertyFecha: Dispatch<React.SetStateAction<ICowKeys>>;
  onSave: () => void;
  isSaved: boolean;
}

export const InputCardDestete = (props: IInputCardDestete) => {
  const {
    value,
    setValue,
    openDatePickerModal,
    onSave,
    isSaved,
    setPropertyFecha,
  } = props;
  const form = useRef(initialFormDestete);
  const {validateForm} = useInputCardDesteteState({value, form});

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
          logo={<DesteteIcon />}
          label="FECHA AL DESTETE"
          property={ICowKeys.fechaDestete}
          initialValue={value}
          setValue={setValue}
          hasMask={false}
          openModal={openDatePickerModal}
          editable={!isSaved}
          setPropertyFecha={setPropertyFecha}
          errorText="Seleccione una fecha"
          error={form.current.fechaDestete}
        />
        <ModalInput
          logo={<PesoLogoInput />}
          label="PESO"
          property={ICowKeys.pesoAlDestete}
          initialValue={value}
          setValue={setValue}
          hasMask={true}
          mask=""
          numKeyboard={true}
          isNumber={true}
          editable={!isSaved}
          defaultValue={`${value.pesoAlDestete} Kg`}
          errorText="Ingrese un peso"
          error={form.current.pesoAlDestete}
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
