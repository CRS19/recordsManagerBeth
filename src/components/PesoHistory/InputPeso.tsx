import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/GlobalStyles';
import {GeneralTitle} from '../Titles/GeneralTitle';
import {RedContainerTitle} from '../Titles/RedContainerTitle';
import {GreyViewBlock} from '../Views/GreyViewBlock';

interface IInputPeso {
  title1: string;
  title2: string;
  title3: string;
  value1: string;
  value2: string;
  value3: string;
}

export const InputPeso = (props: IInputPeso) => {
  const {title1, title2, title3, value1, value2, value3} = props;
  return (
    <View>
      <GeneralTitle title={'Historial de peso'} />
      <View style={styles.RowTextPeso}>
        <RedContainerTitle title={title1} />
        <RedContainerTitle title={title2} />
        <RedContainerTitle title={title3} />
      </View>
      <View style={{...styles.RowTextPeso, paddingTop: 5}}>
        <GreyViewBlock title={value1} />
        <GreyViewBlock title={value2} />
        <GreyViewBlock title={value3} />
      </View>
    </View>
  );
};
