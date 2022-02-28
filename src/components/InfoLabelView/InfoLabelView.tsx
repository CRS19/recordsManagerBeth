import React from 'react';
import {Text, View} from 'react-native';

export interface IInfoLabelViewProps {
  title: string;
  value: () => string;
  hasBorderTop: boolean;
}

export const InfoLabelView = ({
  title,
  value,
  hasBorderTop,
}: IInfoLabelViewProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 56,
        width: 478,
        borderWidth: 2,
        borderTopWidth: hasBorderTop ? 2 : 0,
        marginLeft: 60,
      }}>
      <View
        style={{
          width: 370,
          borderRightWidth: 2,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, marginLeft: 10}}>{title}</Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18}}>{value()}</Text>
      </View>
    </View>
  );
};
