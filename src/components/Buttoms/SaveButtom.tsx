import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SaveIcon} from '../../assets/SaveIcon';

export interface SaveButtomProps {
  onPress: () => void;
}

export const SaveButtom = (props: SaveButtomProps) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            backgroundColor: '#27AE60',
            width: 53,
            height: 53,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <SaveIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};
