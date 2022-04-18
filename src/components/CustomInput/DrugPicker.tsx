import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {Text, View} from 'react-native';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {setPreviusValueInthatIndexGeneral} from '../../constants/SanityRecords';
import {
  IDrugDiagnosis,
  IDrugDiagnosisKey,
} from '../../interfaces/SanityRecords';
import {drugForm} from '../../screens/TabsCowScreen/Sanity/Diagnostico/state/useDiagnosis';
import {styles} from '../../theme/GlobalStyles';

export interface IGeneralPickerProps {
  value: IDrugDiagnosis;
  setValue: React.Dispatch<React.SetStateAction<drugForm[]>>;
  changeDoseUnit: (drugId: string, index: number) => void;
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
          selectedValue={`${value.drugId}-${value.comertialName}`}
          onValueChange={(itemValue, itemIndex) => {
            changeDoseUnit(itemValue.split('-')[0], valueIndex);
            setValue(prevValue =>
              setPreviusValueInthatIndexGeneral(
                prevValue,
                valueIndex,
                itemValue.split('-')[0],
                IDrugDiagnosisKey.DRUG_ID,
                false,
              ),
            );
            setValue(prevValue =>
              setPreviusValueInthatIndexGeneral(
                prevValue,
                valueIndex,
                itemValue.split('-')[1],
                IDrugDiagnosisKey.COMERTIAL_NAME,
                false,
              ),
            );
          }}>
          {itemsList.map((item, index: number) => (
            <Picker.Item
              key={`${item}-${index}`}
              label={`${item.name}`}
              value={`${item._id}-${item.name}`}
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
