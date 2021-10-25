import React from 'react';
import {View} from 'react-native';
import {DesteteIcon} from '../../assets/DesteteIcon';
import {PesoLogoInput} from '../../assets/PesoLogoInput';
import {ICow} from '../../interfaces/CowInterface';
import {styles} from '../../theme/GlobalStyles';
import {ViewInput} from '../ViewInput/ViewInput';
import moment from 'moment';

interface IInputCardDesteteView {
  value: ICow;
}

export const InputCardDesteteView = (props: IInputCardDesteteView) => {
  const {value} = props;

  return (
    <View style={styles.InputCardCaracteristic}>
      <View>
        <ViewInput
          logo={<DesteteIcon />}
          label="FECHA AL DESTETE"
          value={`${moment(value.fechaDestete).format('DD/MM/YYYY')}`}
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
