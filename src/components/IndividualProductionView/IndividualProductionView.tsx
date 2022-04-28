import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from '../../theme/GlobalStyles';
import {FillButton} from '../Buttoms/FillButton';
import {GeneralTitle} from '../Titles/GeneralTitle';

export interface IIndivitualProductionViewProps {
  morningValue: string;
  afternoonValue: string;
}

export const IndividualProductionView = ({
  morningValue,
  afternoonValue,
}: IIndivitualProductionViewProps) => {
  return (
    <View style={styles.IndividualProdRecordContainer}>
      <View style={styles.IndividualProdRecordView}>
        <FillButton
          title="Mañana"
          disable={true}
          color="#EB5757"
          onPress={() => {}}
          height={58}
          width={133}
        />
        <FillButton
          title="Tarde"
          disable={true}
          color="#EB5757"
          onPress={() => {}}
          height={58}
          width={133}
        />
      </View>
      <View style={{...styles.IndividualProdRecordView}}>
        <TextInput
          editable={false}
          style={{
            width: 119,
            marginTop: 64,
            backgroundColor: 'white',
            position: 'relative',
            bottom: 32,
          }}
          label="Litros"
          value={morningValue}
          mode="outlined"
          outlineColor="black"
          selectionColor="black"
          underlineColor="black"
          theme={{
            colors: {primary: 'black', placeholder: 'black'},
          }}
        />
        <TextInput
          editable={false}
          style={{
            width: 119,
            marginTop: 64,
            backgroundColor: 'white',
            position: 'relative',
            bottom: 32,
          }}
          label="Litros"
          value={afternoonValue}
          mode="outlined"
          outlineColor="black"
          selectionColor="black"
          underlineColor="black"
          theme={{
            colors: {primary: 'black', placeholder: 'black'},
          }}
        />
      </View>
      <GeneralTitle title="Total" width={270} />
      <TextInput
        editable={false}
        style={{
          width: 119,
          marginTop: 64,
          backgroundColor: 'white',
          position: 'relative',
          bottom: 60,
          left: 50,
        }}
        label="Litros"
        value={(Number(morningValue) + Number(afternoonValue)).toString()}
        mode="outlined"
        outlineColor="black"
        selectionColor="black"
        underlineColor="black"
        theme={{
          colors: {primary: 'black', placeholder: 'black'},
        }}
      />
    </View>
  );
};
