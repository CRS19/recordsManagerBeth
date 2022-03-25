import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {Text, View} from 'react-native';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {UnitTypeEnum} from '../../constants/PresentationEnum';
import {setPreviusValueInthatIndex} from '../../constants/SanityRecords';
import {IDrugDiagnosis} from '../../interfaces/SanityRecords';
import {drugForm} from '../../screens/TabsCowScreen/Sanity/Diagnostico/state/useDiagnosis';
import {styles} from '../../theme/GlobalStyles';

export interface IGeneralPickerProps {
  value: IDrugDiagnosis;
  setValue: React.Dispatch<React.SetStateAction<drugForm[]>>;
  changeDoseUnit: (drugId: string) => void;
  valueIndex: number;
  itemsList: {_id: string; name: string}[];
  error: boolean;
  errorMessage: string;
}

export const DrugPicker = ({
  value,
  setValue,
  itemsList,
  valueIndex,
  error,
  errorMessage,
  changeDoseUnit,
}: IGeneralPickerProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.PickerInputLabel}>
        {'FARMACO TRATAMIENTO'.toUpperCase()}
      </Text>
      <View style={{left: 10, top: 21}}>{<GeneralIcon />}</View>
      <View style={styles.PickerInput}>
        <Picker
          selectedValue={value.drugId}
          onValueChange={(itemValue, itemIndex) => {
            changeDoseUnit(itemValue);
            setValue(prevValue =>
              setPreviusValueInthatIndex(prevValue, valueIndex, itemValue),
            );
          }}>
          {itemsList.map((item, index: number) => (
            <Picker.Item
              key={`${item}-${index}`}
              label={`${item.name}`}
              value={`${item._id}`}
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
