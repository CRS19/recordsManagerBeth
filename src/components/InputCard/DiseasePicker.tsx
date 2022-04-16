import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {Text, View} from 'react-native';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {setPreviusValue} from '../../constants/SanityRecords';
import {IVacunaFormKeys} from '../../interfaces/SanityRecords';
import {styles} from '../../theme/GlobalStyles';
import {IVacunaPickerProps} from '../CustomInput/VacunaPicker';

export const DiseasePicker = ({
  value,
  setValue,
  changeDoseUnit,
  itemsList,
  error,
  errorMessage,
}: IVacunaPickerProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.PickerInputLabel}>{'ENFERMEDAD'.toUpperCase()}</Text>
      <View style={{left: 10, top: 21}}>{<GeneralIcon />}</View>
      <View style={styles.PickerInput}>
        <Picker
          selectedValue={`${value.disease}`}
          onValueChange={(itemValue, itemIndex) => {
            setValue(prevValue =>
              setPreviusValue(
                prevValue,
                itemValue,
                IVacunaFormKeys.DISEASE,
                false,
              ),
            );
          }}>
          {itemsList.map((item, index: number) => (
            <Picker.Item
              key={`${item}-${index}`}
              label={`${item.name}`}
              value={`${item.name}`}
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
