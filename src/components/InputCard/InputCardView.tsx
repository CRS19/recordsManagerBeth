import React, {Dispatch, useRef} from 'react';
import {View} from 'react-native';
import {LogoHembraInput} from '../../assets/LogoHembraInput';
import {LogoMachoInput} from '../../assets/LogoMachoInput';
import {NameInputLabel} from '../../assets/NameInputLabel';
import {NumeroAreteInput} from '../../assets/NumeroAreteInput';
import {ICowKeys} from '../../constants/ICowKeysEnum';
import {ICow} from '../../interfaces/CowInterface';
import {ModalInput} from '../CustomInput/ModalInput';
import {BirthDateInput} from '../../assets/BirthDateInput';
import {RazaLogoInput} from '../../assets/RazaLogoInput';
import {PesoLogoInput} from '../../assets/PesoLogoInput';
import {BorderButtom} from '../Buttoms/BorderButtom';
import {styles} from '../../theme/GlobalStyles';
import {initialForm} from '../../interfaces/newCowForm';
import {useInputCardState} from './state/useInputCardState';
import {ChooseSexIcon} from '../../assets/ChooseSexIcon';
import {ViewInput} from '../ViewInput/ViewInput';
import moment from 'moment';

interface IInputCardView {
  value: ICow;
}

export const InputCardView = (props: IInputCardView) => {
  const {value} = props;

  return (
    <View style={styles.InputCardCaracteristic}>
      <View>
        <ViewInput
          logo={
            value.sexo === '' ? (
              <ChooseSexIcon />
            ) : value.sexo === 'MACHO' ? (
              <LogoMachoInput />
            ) : (
              <LogoHembraInput />
            )
          }
          label="SEXO"
          value={`${value.sexo.toUpperCase()}`}
        />
        <ViewInput
          logo={<NameInputLabel />}
          label="NOMBRE"
          value={`${value.nombre.toUpperCase()}`}
        />
        <ViewInput
          logo={<NumeroAreteInput />}
          label="N° DE ARETE"
          value={`${value.numeroDeArete}`}
        />
        <ViewInput
          logo={<BirthDateInput />}
          label="FECHA DE NACIMIENTO"
          value={`${moment(value.fechaDeNacimiento).format('DD/MM/YYYY')}`}
        />
        <ViewInput
          logo={<RazaLogoInput />}
          label="RAZA"
          value={`${value.raza.toUpperCase()}`}
        />
        <ViewInput
          logo={<PesoLogoInput />}
          label="PESO AL NACIMIENTO"
          value={`${value.pesoNacimiento} Kg`}
        />
      </View>
    </View>
  );
};
