import React from 'react';
import {Text, View} from 'react-native';
import {
  IDeathCertificate,
  IWitness,
} from '../../../screens/TabsCowScreen/MainRecords/DescarteScreen/Interfaces/Descarte.interface';
import {styles} from '../../../theme/GlobalStyles';
import {InputTextView} from '../../Views/InputTextView';

interface IWitnessCardView {
  deathCertificate: IDeathCertificate;
}

export const WitnessCardView = ({deathCertificate}: IWitnessCardView) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View>
        {deathCertificate.witnesses.map((witness: IWitness, index: number) => (
          <View key={`wt-${index}`}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <View style={styles.DeathCertificateWitnessName}>
                <InputTextView
                  label="ESTUBIERON PRESENTES"
                  value={`${witness.fullName}`}
                />
              </View>
              <View style={styles.DeathCertificateWitnessName}>
                <InputTextView
                  label="CARGO OCUPADO"
                  value={`${witness.possition}`}
                />
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
