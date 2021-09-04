import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';

interface IRedContainerTitle {
  title: string;
}

export const RedContainerTitle = (props: IRedContainerTitle) => {
  return (
    <View style={styles.RedTitleContainer}>
      <Text style={styles.RedTitleText}>{props.title}</Text>
    </View>
  );
};
