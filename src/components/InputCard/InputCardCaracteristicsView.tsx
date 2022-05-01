import React, {Dispatch, useState} from 'react';
import {View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
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
import {ViewInput} from '../ViewInput/ViewInput';

interface IInputCardCaracteristicsView {
  value: ICow;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  openMomDataModal: Dispatch<React.SetStateAction<boolean>>;
  setOpenDadDataModal: Dispatch<React.SetStateAction<boolean>>;
  hasMomDad: boolean;
  onSave: () => void;
  isInsert?: boolean;
}

export const InputCardCaracteristicsView = (
  props: IInputCardCaracteristicsView,
) => {
  const {value, setValue, isInsert} = props;
  const {edadDias, edadAños, edadMeses, edadMesesA, edadDiasM} = useGetOld({
    birtdayTiemstamp: value.fechaDeNacimiento,
  });
  const {newCowPrice, currentCowPrice} = useGetPrice();
  const [ageType, setageType] = useState<AgeEnum>(AgeEnum.MESES_DIAS);

  return (
    <View style={styles.InputCardCaracteristic}>
      <ViewInput
        logo={<CategoryLogoInput />}
        label="CATEGORIA"
        value={value.categoria.toUpperCase()}
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
        defaultValue={
          isInsert
            ? `${newCowPrice.toFixed(2)} $`
            : `${currentCowPrice.toFixed(2)} $`
        }
        editable={false}
      />
      <ViewInput
        logo={<MomNameIconLabel />}
        label="MADRE / ARETE"
        value={`${value.nombreDeMadre.toUpperCase()} / ${
          value.numeroAreteMadre
        } `}
      />
      <ViewInput
        logo={<DadNameIconLabel />}
        label="PADRE / ARETE"
        value={`${value.nombreDePadre.toUpperCase()} / ${
          value.numeroAretePadre
        } `}
      />
    </View>
  );
};
