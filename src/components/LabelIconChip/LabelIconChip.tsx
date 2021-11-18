import React from 'react';
import {View, Text} from 'react-native';
import {Chip} from 'react-native-paper';
import {MomNameIconLabel} from '../../assets/MomNameIconLabel';
import {styles} from '../../theme/GlobalStyles';

interface LabelIconChipProps {
  name: string;
  areteNumber: string;
}

export const LabelIconChip = ({name, areteNumber}: LabelIconChipProps) => {
  return (
    <View>
      <View style={styles.LabelChipIcon}>
        <View style={{marginHorizontal: 10}}>
          <MomNameIconLabel />
        </View>
        <Text style={styles.RegisterTitleGeneric}>{name}</Text>
        <View
          style={{
            backgroundColor: 'black',
            width: 4,
            height: 4,
            borderRadius: 100,
            marginHorizontal: 15,
          }}
        />
        <Text style={{...styles.RegisterTitleGeneric, marginRight: 20}}>
          {areteNumber}
        </Text>
      </View>
    </View>
  );
};
