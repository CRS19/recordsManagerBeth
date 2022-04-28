import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {BorderButtom} from '../../../../../components/Buttoms/BorderButtom';
import {WitnessCardView} from '../../../../../components/DescarteComponents/Views/WitnessCardView';
import {DescarteInfoCard} from '../../../../../components/InputCard/DescarteInfoCard';
import {BoxTitle} from '../../../../../components/Titles/BoxTitle';
import {GeneralTitle} from '../../../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../../../components/TopBar';
import {InputTextView} from '../../../../../components/Views/InputTextView';
import {GeneralStackScreensParams} from '../../../../../navigation/GeneralAppStack';
import {styles} from '../../../../../theme/GlobalStyles';
import {getDateOfDay, MONTHS} from '../../../../../utils/time-utils';
import {useCreatePdf} from '../../../../../utils/useCreatePdf';

export const MuerteIndividual = ({
  route,
}: StackScreenProps<GeneralStackScreensParams, 'MuerteIndividuo'>) => {
  const deathCertificate = route.params.deathCertificate;

  const formatDay = getDateOfDay(deathCertificate.descarteTimestmap!);
  const {createDeathCertificateReport} = useCreatePdf();

  return (
    <View>
      <TopBar title="Acta defunción de: " backIcon={true} />
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
            alignItems: 'center',
          }}>
          <BoxTitle
            outlineColor="#2B9336"
            title={`ACTA DE DEFUNCIÓN #${deathCertificate.deathCertificateId}`}
          />
          <GeneralTitle
            title={`EN LA FACULTAD DE CIENCIAS PECUARIAS A LOS ${
              formatDay.split('-')[2]
            } DÍAS DEL MES DE ${MONTHS[Number(formatDay.split('-')[1])]} DE ${
              formatDay.split('-')[0]
            }`}
            width={840}
          />
          <WitnessCardView deathCertificate={deathCertificate} />
          <GeneralTitle
            title="Con motivo de constatar la muerte del semobiente de la propiedad de la Escuela de Ingeniría Zootécnica, distinguido de las siguientes caracteristicas: "
            width={840}
            textTransform="none"
            textAling="left"
          />

          <DescarteInfoCard deathCertificate={deathCertificate} />
          <Text style={{fontSize: 18, marginVertical: 10}}>
            La necropcia fue practicada por:{' '}
          </Text>
          <View style={styles.DeathCertificateWitnessName}>
            <InputTextView
              label="RESPONSABLE"
              value={`${deathCertificate.necroptiaResponsable}`}
            />
          </View>
          <Text style={{fontSize: 18, marginVertical: 10}}>
            Deacuerdo a las lesiones se determina que la muerte fue causada por:
          </Text>
          <View style={{...styles.DeathCertificateWitnessName, marginTop: 20}}>
            <Text style={{color: '#6200EE'}}>DIAGNÓSTICO</Text>
            <Text>{deathCertificate.deathDiagnosis}</Text>
            <View style={{...styles.ModalInputDivider, width: 375}} />
          </View>
          <View style={{marginTop: 20}}>
            <BorderButtom
              title="Imprimir"
              onPress={() => createDeathCertificateReport(deathCertificate)}
            />
          </View>
        </View>
        <View style={{height: 200}} />
      </ScrollView>
    </View>
  );
};
