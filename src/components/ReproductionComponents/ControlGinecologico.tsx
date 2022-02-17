import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {FillButton} from '../Buttoms/FillButton';

export interface IControlGinecologicoProps {
  existCurrentRecord: boolean;
  isCeloBtnActive: boolean;
  isChequeoBtnActive: boolean;
  onCeloClicked: () => void;
  onChequeoCliked: () => void;
}

export const ControlGinecologico = ({
  existCurrentRecord,
  isCeloBtnActive,
  isChequeoBtnActive,
  onCeloClicked,
  onChequeoCliked,
}: IControlGinecologicoProps) => {
  return (
    <View style={{alignItems: 'center', marginHorizontal: 20}}>
      <Text style={styles.RegisterListTitle}>control ginecológico</Text>
      <View style={{...styles.RegisterDivider, width: 205}} />
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{marginHorizontal: 3.5}}>
          <FillButton
            title="chequeo"
            onPress={onChequeoCliked}
            color={isChequeoBtnActive ? 'red' : undefined}
            width={102}
            height={44}
            disable={isCeloBtnActive || existCurrentRecord}
          />
        </View>
        <View style={{marginHorizontal: 3.5}}>
          <FillButton
            title="celo"
            onPress={onCeloClicked}
            color={isCeloBtnActive ? 'red' : undefined}
            width={97}
            height={44}
            disable={isChequeoBtnActive || existCurrentRecord}
          />
        </View>
      </View>
    </View>
  );
};
