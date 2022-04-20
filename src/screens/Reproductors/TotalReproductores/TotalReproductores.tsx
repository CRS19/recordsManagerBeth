import React from 'react';
import {Text, View} from 'react-native';
import {BorderButtom} from '../../../components/Buttoms/BorderButtom';
import {TopBar} from '../../../components/TopBar';
import {styles} from '../../../theme/GlobalStyles';
import {useDeleteme} from './stateDeleteme/useDeleteme';

export const TotalReproductores = () => {
  const {data, onGenerate, numberOfGeneratedPages, limitNumber} = useDeleteme();

  return (
    <View>
      <TopBar backIcon={true} title=" Total Reproductores"></TopBar>
      <View style={{marginVertical: 40, marginLeft: 600}}>
        <Text>
          {numberOfGeneratedPages} /{Math.floor(limitNumber / 3) + 1}
        </Text>
      </View>
      <BorderButtom title="generar pdf" onPress={() => onGenerate(data)} />

      <View style={{...styles.LogInFooter, marginTop: 450}} />
    </View>
  );
};
