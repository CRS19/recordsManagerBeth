import React from 'react';
import {View, Text} from 'react-native';
import {
  IDeathCertificate,
  IWitness,
  WORK_POSITIONS,
} from '../../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';
import {BallButtom} from '../Buttoms/BallButtom';
import {InputWitnessesCards} from '../InputCard/InputWitnessesCards';

export interface IWitnessCardProps {
  deathCertificate: IDeathCertificate;
  actions: {
    addOtherWitness: () => void;
    deleteWitness: () => void;
    InputWitnessesCardsActions: {
      onChangeNameWitness: (newName: string, witnessPosition: number) => void;
      onChangeWitnessWorkPossition: (
        newPosition: WORK_POSITIONS,
        witnessPosition: number,
      ) => void;
      witnesses: IWitness[];
    };
  };
}

export const WitnessCards = ({
  deathCertificate,
  actions,
}: IWitnessCardProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        {deathCertificate.witnesses.map((witness: IWitness, index: number) => (
          <View key={`wt-${index}`}>
            <InputWitnessesCards
              {...actions.InputWitnessesCardsActions}
              witnessPosition={index}
            />
          </View>
        ))}
      </View>
      <View>
        <BallButtom
          title="+"
          onPress={() => {
            actions.addOtherWitness();
          }}
        />
        <BallButtom
          title="-"
          onPress={() => {
            actions.deleteWitness();
          }}
        />
      </View>
    </View>
  );
};
