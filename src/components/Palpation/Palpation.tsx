import React, {Dispatch} from 'react';
import {Text, View} from 'react-native';
import {BallButtom} from '../Buttoms/BallButtom';
import {GeneralTitle} from '../Titles/GeneralTitle';

export interface IPalpationProps {
  setIsOpenPalpationTypeModal: Dispatch<React.SetStateAction<boolean>>;
}

export const Palpation = ({setIsOpenPalpationTypeModal}: IPalpationProps) => {
  return (
    <View
      style={{backgroundColor: 'white', alignItems: 'center', marginTop: 10}}>
      <GeneralTitle title={'Registro de palpación'} width={440} />
      <BallButtom
        onPress={() => setIsOpenPalpationTypeModal(true)}
        title={'+'}
      />
      <Text>palpación</Text>
    </View>
  );
};
