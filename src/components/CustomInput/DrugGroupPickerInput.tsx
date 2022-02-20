import React from 'react';
import {Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from '../../theme/GlobalStyles';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {drugGroupEnum, IDrug} from '../../interfaces/Drug.interface';
import {DRUG_GROUPS} from '../../constants/DrugGroupConstant';

interface IDrugGroupPickerInputProps {
  valueObj: IDrug;
  setValue: React.Dispatch<React.SetStateAction<IDrug>>;
  error: boolean;
  errorMessage: string;
}

export const DrugGroupPickerInput = ({
  valueObj,
  setValue,
  error,
  errorMessage,
}: IDrugGroupPickerInputProps) => {
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
        {'Grupo'.toUpperCase()}
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
          selectedValue={valueObj.group}
          onValueChange={(itemValue, itemIndex) =>
            setValue({...valueObj, group: itemValue as drugGroupEnum})
          }>
          {DRUG_GROUPS.map((group, index: number) => (
            <Picker.Item
              key={`${group}-${index}`}
              label={`${group.description}`}
              value={`${group.value}`}
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
