import React from 'react';
import {Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  UnitTypeEnum,
  DRUGS_PRESENTATIONS,
} from '../../constants/PresentationEnum';
import {styles} from '../../theme/GlobalStyles';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {IDrug} from '../../interfaces/Drug.interface';

interface IPresentationPickerInputProps {
  valueObj: IDrug;
  setValue: React.Dispatch<React.SetStateAction<IDrug>>;
  error: boolean;
  errorMessage: string;
}

export const PresentationPickerInput = ({
  valueObj,
  setValue,
  error,
  errorMessage,
}: IPresentationPickerInputProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{
          position: 'absolute',
          fontSize: 12,
          left: 60,
          top: 10,
          color: '#6200EE',
        }}>
        {'Unidad de medida'.toUpperCase()}
      </Text>
      <View style={{left: 10, top: 21}}>{<GeneralIcon />}</View>
      <View
        style={{
          width: 239,
          height: 37,
          borderWidth: 1.5,
          borderRadius: 4,
          marginVertical: 10,
          left: 19,
          borderColor: 'transparent',
        }}>
        <Picker
          selectedValue={valueObj.unitType}
          onValueChange={(itemValue, itemIndex) =>
            setValue({...valueObj, unitType: itemValue as UnitTypeEnum})
          }>
          {DRUGS_PRESENTATIONS.map((presentation, index: number) => (
            <Picker.Item
              key={`${presentation}-${index}`}
              label={`${presentation.description}`}
              value={`${presentation.value}`}
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
