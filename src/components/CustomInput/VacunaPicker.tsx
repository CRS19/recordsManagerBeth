import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {styles} from '../../theme/GlobalStyles';
import {IVaccines, IVacunaFormKeys} from '../../interfaces/SanityRecords';
import {IVacunaForm} from '../../screens/TabsCowScreen/Sanity/Vacunas/state/useVacunas';
import {setPreviusValue} from '../../constants/SanityRecords';

export interface IVacunaPickerProps {
  value: IVaccines;
  setValue: React.Dispatch<React.SetStateAction<IVacunaForm>>;
  changeDoseUnit: (drugId: string) => void;
  itemsList: {_id: string; name: string}[];
  error: boolean;
  errorMessage: string;
}

export const VacunaPicker = ({
  value,
  setValue,
  changeDoseUnit,
  itemsList,
  error,
  errorMessage,
}: IVacunaPickerProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.PickerInputLabel}>{'VACUNA'.toUpperCase()}</Text>
      <View style={{left: 10, top: 21}}>{<GeneralIcon />}</View>
      <View style={styles.PickerInput}>
        <Picker
          selectedValue={`${value.drugId}-${value.comercialName}`}
          onValueChange={(itemValue, itemIndex) => {
            changeDoseUnit(itemValue.split('-')[0]);
            setValue(prevValue =>
              setPreviusValue(
                prevValue,
                itemValue.split('-')[0],
                IVacunaFormKeys.DRUG_ID,
                false,
              ),
            );
            setValue(prevValue =>
              setPreviusValue(
                prevValue,
                itemValue.split('-')[1],
                IVacunaFormKeys.COMERCIAL_NAME,
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
