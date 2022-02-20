import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {Text, View} from 'react-native';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {
  APPLICATION_WAY_PICKER_ITEMS,
  setPreviusValueInthatIndexGeneral,
} from '../../constants/SanityRecords';
import {
  applicationWayEnum,
  IDrugDiagnosis,
  IDrugDiagnosisKey,
} from '../../interfaces/SanityRecords';
import {drugForm} from '../../screens/TabsCowScreen/Sanity/Diagnostico/state/useDiagnosis';
import {styles} from '../../theme/GlobalStyles';

export interface IAplicationWayPickerProps {
  value: IDrugDiagnosis;
  setValue: React.Dispatch<React.SetStateAction<drugForm[]>>;
  valueIndex: number;
  error: boolean;
  errorMessage: string;
}

export const AplicationWayPicker = ({
  value,
  setValue,
  valueIndex,
  error,
  errorMessage,
}: IAplicationWayPickerProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.PickerInputLabel}>
        {'VÍA DE APLICACIÓN'.toUpperCase()}
      </Text>
      <View style={{left: 10, top: 21}}>{<GeneralIcon />}</View>
      <View style={styles.PickerInput}>
        <Picker
          selectedValue={value.applicationWay}
          onValueChange={(itemValue, itemIndex) => {
            console.log('itemvalue -> ', itemValue);

            setValue(prevValue =>
              setPreviusValueInthatIndexGeneral(
                prevValue,
                valueIndex,
                itemValue,
                IDrugDiagnosisKey.APPLICATION_WAY,
                false,
              ),
            );
          }}>
          {APPLICATION_WAY_PICKER_ITEMS.map((item, index: number) => (
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
