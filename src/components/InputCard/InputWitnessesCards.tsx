import React from 'react';
import {View} from 'react-native';
import {
  IWitness,
  WORK_POSITIONS,
} from '../../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';
import {styles} from '../../theme/GlobalStyles';
import {WorkPositionPicker} from '../CustomInput/pickers/WorkPositionPicker';
import {GenericTextInput} from '../CustomInput/textInputs/GenericTextInput';

export interface IInputWithnessesCardsProps {
  onChangeNameWitness: (newName: string, witnessPosition: number) => void;
  witnesses: IWitness[];
  onChangeWitnessWorkPossition: (
    newPosition: WORK_POSITIONS,
    witnessPosition: number,
  ) => void;
  witnessPosition: number;
}

export const InputWitnessesCards = ({
  onChangeNameWitness,
  onChangeWitnessWorkPossition,
  witnesses,
  witnessPosition,
}: IInputWithnessesCardsProps) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <View style={styles.DeathCertificateWitnessName}>
        <GenericTextInput
          value={witnesses[witnessPosition].fullName}
          label="ESTUBIERON PRESENTES"
          error={false}
          errorText={'Ingrese un nombre de un testigo'}
          onChangeNameWitness={onChangeNameWitness}
          witnessPosition={witnessPosition}
        />
      </View>
      <View style={styles.DeathCertificateWitnessName}>
        <WorkPositionPicker
          witnessPosition={witnessPosition}
          onChangeWitnessWorkPossition={onChangeWitnessWorkPossition}
          value={witnesses[witnessPosition].possition}
          error={false}
          errorMessage="Seleccione un cargo"
        />
      </View>
    </View>
  );
};
