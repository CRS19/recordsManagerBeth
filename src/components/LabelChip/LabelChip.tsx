import React from 'react';
import {Text, View} from 'react-native';
import {Chip} from 'react-native-paper';

interface ILabelChipProps {
  text: string;
  width: number;
}

export const LabelChip = (props: ILabelChipProps) => {
  return (
    <View>
      <Chip
        style={{
          marginTop: 10,
          backgroundColor: '#05CBB8',
          width: props.width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{marginHorizontal: 10}}>{props.text}</Text>
      </Chip>
    </View>
  );
};
