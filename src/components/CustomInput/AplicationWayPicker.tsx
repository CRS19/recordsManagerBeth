import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {Text, View} from 'react-native';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {
  APPLICATION_WAY_PICKER_ITEMS,
  setDewormingFormValue,
  setPreviusValueInthatIndexGeneral,
} from '../../constants/SanityRecords';
import {
  IDeworming,
  IDewormingFormKeys,
  IDrugDiagnosis,
  IDrugDiagnosisKey,
} from '../../interfaces/SanityRecords';
import {IDewormingForm} from '../../screens/TabsCowScreen/Sanity/Desparacitaciones/state/useDeworming';
import {drugForm} from '../../screens/TabsCowScreen/Sanity/Diagnostico/state/useDiagnosis';
import {styles} from '../../theme/GlobalStyles';
import {has} from 'lodash';

export interface IAplicationWayPickerProps {
  value: IDrugDiagnosis | IDeworming;
  setValue?: React.Dispatch<React.SetStateAction<drugForm[]>>;
  setDewormingValue?: React.Dispatch<React.SetStateAction<IDewormingForm>>;
  valueIndex?: number;
  error: boolean;
  errorMessage: string;
}

export const AplicationWayPicker = ({
  value,
  setValue,
  setDewormingValue,
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
            has(value, 'frequency')
              ? setValue!(prevValue =>
                  setPreviusValueInthatIndexGeneral(
                    prevValue,
                    valueIndex!,
                    itemValue,
                    IDrugDiagnosisKey.APPLICATION_WAY,
                    false,
                  ),
                )
              : setDewormingValue!(prevValue =>
                  setDewormingFormValue(
                    prevValue,
                    itemValue,
                    IDewormingFormKeys.APPLICATION_WAY,
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
