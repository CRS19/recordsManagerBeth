import React, {Dispatch, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {Chip} from 'react-native-paper';
import {ModalInput} from '../CustomInput/ModalInput';
import {CategoryLogoInput} from '../../assets/CategoryLogoInput';
import {ICow} from '../../interfaces/CowInterface';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {EdadLogoInput} from '../../assets/EdadLogoInput';
import {ValueLogoInput} from '../../assets/ValueLogoInput';
import {useGetOld} from '../../utils/useGetOld';
import {AgeEnum} from '../../constants/ageTypeEnum';
import {MomNameIconLabel} from '../../assets/MomNameIconLabel';
import {DadNameIconLabel} from '../../assets/DadNameIconLabel';
import {useGetPrice} from '../../utils/useGetPrice';

interface IInputCardCaracteristics {
  value: ICow;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  openMomDataModal: Dispatch<React.SetStateAction<boolean>>;
  setOpenDadDataModal: Dispatch<React.SetStateAction<boolean>>;
  hasMomDad: boolean;
  onSave: () => void;
}

export const InputCardCaracteristics = (props: IInputCardCaracteristics) => {
  const {
    value,
    setValue,
    onSave,
    hasMomDad,
    openMomDataModal,
    setOpenDadDataModal,
  } = props;
  const {edadDias, edadAños, edadMeses, edadMesesA, edadDiasM} = useGetOld({
    birtdayTiemstamp: value.fechaDeNacimiento,
  });
  const {newCowPrice} = useGetPrice();
  const [ageType, setageType] = useState<AgeEnum>(AgeEnum.MESES_DIAS);

  return (
    <View style={styles.InputCardCaracteristic}>
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
        property={ICowKeys.fechaDeNacimiento}
        initialValue={value}
        setValue={setValue}
        defaultValue={
          ageType === AgeEnum.MESES_DIAS
            ? `${edadMeses} MESES / ${edadDiasM} DIAS`
            : `${edadAños} AÑOS / ${edadMesesA} MESES`
        }
        hasMask={false}
        hasLeftButtom={true}
        ageType={ageType}
        changeAge={setageType}
        mask="[A][-----------------------------------------------------]"
      />
      <ModalInput
        logo={<ValueLogoInput />}
        label="VALOR DEL BOVINO"
        property={ICowKeys.valorDelBovino}
        initialValue={value}
        setValue={setValue}
        hasMask={false}
        mask="[A][-----------------------------------------------------]"
        defaultValue={`${newCowPrice} $`}
        editable={false}
      />
      <ModalInput
        logo={<MomNameIconLabel />}
        label="MADRE / ARETE"
        property={ICowKeys.nombreDeMadre}
        initialValue={value}
        setValue={setValue}
        hasMask={false}
        mask="[A][-----------------------------------------------------]"
        editable={!hasMomDad}
        openModal={openMomDataModal}
      />
      <ModalInput
        logo={<DadNameIconLabel />}
        label="PADRE / ARETE"
        property={ICowKeys.nombreDePadre}
        initialValue={value}
        setValue={setValue}
        hasMask={false}
        mask="[A][-----------------------------------------------------]"
        editable={!hasMomDad}
        openModal={setOpenDadDataModal}
      />
      <Chip
        style={{
          marginTop: 10,
          backgroundColor: '#05CBB8',
        }}>{`    16   `}</Chip>
    </View>
  );
};
