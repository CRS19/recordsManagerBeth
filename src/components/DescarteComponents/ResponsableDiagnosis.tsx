import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {IDeathCertificate} from '../../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';
import {styles} from '../../theme/GlobalStyles';
import {ResponsableDiagnosisInputText} from '../CustomInput/textInputs/ResponsableDiagnosisInputText';

export interface IResponsableDiagnosis {
  responsableDiagnosisActions: {
    onChangeNecroptiaResponsable: (newResponsable: string) => void;
    onChangeDiagnosis: (newDiagnosis: string) => void;
  };
  deathCertificate: IDeathCertificate;
}

export const ResponsableDiagnosis = ({
  responsableDiagnosisActions,
  deathCertificate,
}: IResponsableDiagnosis) => {
  return (
    <View style={{margin: 10}}>
      <Text style={{fontSize: 18, marginVertical: 10}}>
        La necropcia fue practicada por:{' '}
      </Text>
      <View style={styles.DeathCertificateWitnessName}>
        <ResponsableDiagnosisInputText
          label="Responsable"
          value={deathCertificate.necroptiaResponsable}
          error={false}
          errorText={'Ingrese un responsable'}
          onChangeText={
            responsableDiagnosisActions.onChangeNecroptiaResponsable
          }
        />
      </View>
      <Text style={{fontSize: 18, marginVertical: 10}}>
        Deacuerdo a las lesiones se determina que la muerte fue causada por:
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          alignSelf: 'flex-start',
          minWidth: 640,
        }}>
        <View style={{paddingLeft: 25}}>
          <Text style={{color: '#6200EE', fontSize: 18}}>Diagnostico</Text>
          <TextInput
            style={{
              borderStartColor: 'red',
              maxWidth: 650,
              color: '#000000',
              fontSize: 16,
            }}
            value={deathCertificate.deathDiagnosis}
            multiline={true}
            onChangeText={text => {
              responsableDiagnosisActions.onChangeDiagnosis(text);
            }}
          />
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: '#6200EE',
          }}
        />
      </View>
    </View>
  );
};
