import React from 'react';
import {Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {GeneralIcon} from '../../assets/GeneralIcon';
import {IDeworming, IDewormingFormKeys} from '../../interfaces/SanityRecords';
import {IDewormingForm} from '../../screens/TabsCowScreen/Sanity/Desparacitaciones/state/useDeworming';
import {styles} from '../../theme/GlobalStyles';
import {
  setDewormingFormValue,
  setPreviusValue,
} from '../../constants/SanityRecords';

interface IDewormingPickerProps {
  value: IDeworming;
  setDewormingForm: React.Dispatch<React.SetStateAction<IDewormingForm>>;
  changeDoseUnit: (drugId: string) => void;
  itemList: {_id: string; name: string}[];
  error: boolean;
  errorMessage: string;
}

export const DewormingPicker = ({
  value,
  setDewormingForm,
  changeDoseUnit,
  itemList,
  error,
  errorMessage,
}: IDewormingPickerProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.PickerInputLabel}>{'FARMACO'.toUpperCase()}</Text>
      <View style={{left: 10, top: 21}}>{<GeneralIcon />}</View>
      <View style={styles.PickerInput}>
        <Picker
          selectedValue={`${value.drugId}-${value.comertialName}`.trim()}
          onValueChange={(itemValue, itemIndex) => {
            changeDoseUnit(itemValue.split('-')[0]);
            setDewormingForm(prevValue =>
              setDewormingFormValue(
                prevValue,
                itemValue.split('-')[0],
                IDewormingFormKeys.DRUG_ID,
                false,
              ),
            );
            setDewormingForm(prevValue =>
              setDewormingFormValue(
                prevValue,
                itemValue.split('-')[1],
                IDewormingFormKeys.COMMERTICAL_NAME,
                false,
              ),
            );
          }}>
          {itemList.map((item, index: number) => (
            <Picker.Item
              key={`${item}-${index}`}
              label={`${item.name}`}
              value={`${item._id}-${item.name}`.trim()}
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
