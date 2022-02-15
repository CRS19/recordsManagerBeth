import React, {useState} from 'react';
import {View} from 'react-native';
import {DesteteIcon} from '../../assets/DesteteIcon';
import {PesoLogoInput} from '../../assets/PesoLogoInput';
import {ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';
import {ViewInput} from '../ViewInput/ViewInput';
import moment from 'moment';
import {ModalInput} from '../CustomInput/ModalInput';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {AgeEnum} from '../../constants/ageTypeEnum';
import {useGetOld} from '../../utils/useGetOld';
import {emptyCow} from '../../VaquitasPrueba/vacas';

interface IInputCardDesteteView {
  value: ICow;
}

export const InputCardDesteteView = (props: IInputCardDesteteView) => {
  const {value} = props;

  const {edadDias, edadAños, edadMeses, edadMesesA, edadDiasM} = useGetOld({
    birtdayTiemstamp: value.fechaDestete,
    otherTs: value.fechaDeNacimiento,
  });
  const [noUse, setCow] = useState<ICow>(emptyCow);

  const [ageType, setageType] = useState<AgeEnum>(AgeEnum.MESES_DIAS);

  return (
    <View style={styles.InputCardCaracteristic}>
      <View>
        <ModalInput
          logo={<DesteteIcon />}
          label="EDAD AL DESTETE"
          property={ICowKeys.fechaDestete}
          initialValue={value}
          setValue={setCow}
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
        <ViewInput
          logo={<PesoLogoInput />}
          label="PESO"
          value={`${value.pesoAlDestete} Kg`}
        />
      </View>
    </View>
  );
};
