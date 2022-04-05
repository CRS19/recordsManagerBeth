import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../theme/GlobalStyles';
import {Picker} from '@react-native-picker/picker';
import {GeneralIcon} from '../../../assets/GeneralIcon';
import {WORK_POSITIONS} from '../../../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';
import {WORK_POSITIONS_PICKER_ITEMS} from '../../../screens/TabsCowScreen/MainRecords/DescarteScreen/constants/DescarteContants';

export interface IWorkPositionPicker {
  value: WORK_POSITIONS;
  error: boolean;
  errorMessage: string;
  witnessPosition: number;
  onChangeWitnessWorkPossition: (
    newPosition: WORK_POSITIONS,
    witnessPosition: number,
  ) => void;
}

export const WorkPositionPicker = ({
  value,
  error,
  errorMessage,
  witnessPosition,
  onChangeWitnessWorkPossition,
}: IWorkPositionPicker) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.PickerInputLabel}>
        {'VÍA DE APLICACIÓN'.toUpperCase()}
      </Text>
      <View style={{left: 10, top: 21}}>{<GeneralIcon />}</View>
      <View style={styles.PickerInput}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => {
            onChangeWitnessWorkPossition(itemValue, witnessPosition);
          }}>
          {WORK_POSITIONS_PICKER_ITEMS.map((item, index: number) => (
            <Picker.Item
              key={`${item}-${index}`}
              label={`${item.label}`}
              value={`${item.value}`}
            />
          ))}
        </Picker>
      </View>
      <View style={{...styles.ModalInputDivider, left: 0}} />
      {!!error ? (
        <View style={{position: 'absolute', right: -10, bottom: 0}}>
          <Text style={styles.ErrorTextHelper}>{errorMessage}</Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};
