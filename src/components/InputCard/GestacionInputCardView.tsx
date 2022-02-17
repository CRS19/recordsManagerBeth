import React, {Dispatch, useRef, useState} from 'react';
import {View} from 'react-native';
import {AbortosIcon} from '../../assets/AbortosIcon';
import {AgeFirstPart} from '../../assets/AgeFirstPart';
import {CigueniaIcon} from '../../assets/CigueniaIcon';
import {FechaUltimoPartoIcon} from '../../assets/FechaUltimoPartoIcon';
import {GestaciónDaysIcon} from '../../assets/GestaciónDaysIcon';
import {AgeEnum} from '../../constants/ageTypeEnum';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {ICow} from '../../interfaces/CowInterface';
import {initialFormGestation} from '../../interfaces/newCowForm';
import {styles} from '../../theme/GlobalStyles';
import {ModalInput} from '../CustomInput/ModalInput';
import {ViewInput} from '../ViewInput/ViewInput';
import moment from 'moment';

interface IGestacionInputCardView {
  value: ICow;
  openEdadPrimerPartoModal: Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<ICow>>;
  setPropertyFecha: Dispatch<React.SetStateAction<ICowKeys>>;
  openDatePickerModal: Dispatch<React.SetStateAction<boolean>>;
  onSave: () => void;
  isSaved: boolean;
}

export const GestacionInputCardView = (props: IGestacionInputCardView) => {
  const {value, setValue, openEdadPrimerPartoModal, onSave, isSaved} = props;

  const edadMeses = value.vacaInfo!.edadPrimerParto.months;
  const edadAños = value.vacaInfo!.edadPrimerParto.years;
  const edadMesesA = value.vacaInfo!.edadPrimerParto.months + 12 * edadAños;
  const edadDiasM = value.vacaInfo!.edadPrimerParto.days + 30 * edadMesesA;

  const [ageType, setageType] = useState<AgeEnum>(AgeEnum.MESES_DIAS);
  const form = useRef(initialFormGestation);

  return (
    <View
      style={{
        ...styles.InputCardCaracteristic,
        backgroundColor: isSaved ? '#03DAC5' : 'white',
      }}>
      <View>
        <ViewInput
          logo={<AbortosIcon />}
          label="N° DE ABORTOS"
          value={`${value.vacaInfo!.numeroDeAbortos}`}
        />
        <ViewInput
          logo={<CigueniaIcon />}
          label="N° DE PARTOS"
          value={`${value.vacaInfo!.numeroDePartos}`}
        />
        <ViewInput
          logo={<GestaciónDaysIcon />}
          label="DIAS DE GESTACIÓN PROM"
          value={`${value.vacaInfo?.diasGestaciónPromedio} DIAS`}
        />
        <ModalInput
          logo={<AgeFirstPart />}
          label="EDAD PRIMER PARTO"
          property={ICowKeys.edadPrimerParto}
          initialValue={value}
          setValue={setValue}
          defaultValue={
            ageType === AgeEnum.MESES_DIAS
              ? `${edadMesesA} MESES / ${edadDiasM} DIAS`
              : `${edadAños} AÑOS / ${edadMeses} MESES`
          }
          hasMask={false}
          hasLeftButtom={true}
          ageType={ageType}
          changeAge={setageType}
          editable={false}
          openModal={openEdadPrimerPartoModal}
          errorText="Ingrese edad"
          error={form.current.edadPrimerParto}
          mask="[A][-----------------------------------------------------]"
        />
      </View>
    </View>
  );
};
