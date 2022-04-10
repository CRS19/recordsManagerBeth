import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {BorderButtom} from '../../../../components/Buttoms/BorderButtom';
import {ResponsableDiagnosis} from '../../../../components/DescarteComponents/ResponsableDiagnosis';
import {WitnessCards} from '../../../../components/DescarteComponents/WitnessCards';
import {DescarteInfoCard} from '../../../../components/InputCard/DescarteInfoCard';
import {BoxTitle} from '../../../../components/Titles/BoxTitle';
import {GeneralTitle} from '../../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../../components/TopBar';
import {TabScreensParams} from '../../../../navigation/TabNavigatorCow';
import {styles} from '../../../../theme/GlobalStyles';
import {getMaxDate} from '../../../../utils/time-utils';
import {useDescarte} from './state/useDescarte';
import {isNil} from 'lodash';

export const Descarte = ({
  route,
}: StackScreenProps<TabScreensParams, 'Descarte'>) => {
  const currentCow = route.params.currentCow;
  const {
    setMarkedD,
    markedD,
    deathDocumentNumber,
    dayInfo,
    deathCertificate,
    actions,
  } = useDescarte({
    currentCow,
  });

  const witnessCardProps = {
    deathCertificate,
    actions,
  };

  const responsableDiagnosisProps = {
    responsableDiagnosisActions: actions.responsableDiagnosisActions,
    deathCertificate,
  };

  return (
    <View>
      <TopBar title="Acta de defunción" />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.GenericTabContainer}>
          <View
            style={{
              ...styles.LeftGenericTabContainer,
            }}>
            <Calendar
              markedDates={markedD}
              onDayPress={day => {
                const {dateString} = day;
                setMarkedD({
                  [dateString]: {
                    selected: true,
                    selectedColor: 'orange',
                    activeOpacity: 0,
                  },
                });
              }}
              maxDate={getMaxDate()}
              enableSwipeMonths={true}
            />
          </View>
          <View
            style={{
              ...styles.RigthGenericTabContainer,
            }}>
            <View>
              <ScrollView>
                <View>
                  {/**TODO: obtener el numero de acta de un endpoint**/}
                  <View
                    style={{
                      marginHorizontal: 20,
                      marginTop: 20,
                      marginBottom: 10,
                    }}>
                    <BoxTitle
                      outlineColor="#2B9336"
                      title={`ACTA DE DEFUNCIÓN #${
                        isNil(deathDocumentNumber)
                          ? '...'
                          : deathDocumentNumber + 1
                      }`}
                    />
                    <GeneralTitle
                      title={`EN LA FACULTAD DE CIENCIAS PECUARIAS A LOS ${dayInfo.numberDay} DÍAS DEL MES DE ${dayInfo.month} DE ${dayInfo.year}`}
                      width={840}
                    />
                    <WitnessCards {...witnessCardProps} />
                    <GeneralTitle
                      title="Con motivo de constatar la muerte del semobiente de la propiedad de la Escuela de Ingeniría Zootécnica, distinguido de las siguientes caracteristicas: "
                      width={840}
                      textTransform="none"
                      textAling="left"
                    />
                    <DescarteInfoCard deathCertificate={deathCertificate} />
                    <ResponsableDiagnosis {...responsableDiagnosisProps} />
                    <View style={{margin: 20}}>
                      <BorderButtom
                        title="Guardar"
                        onPress={() => actions.saveDeathCertificate()}
                      />
                      <Text>{JSON.stringify(deathCertificate, null, 3)}</Text>
                    </View>
                  </View>
                </View>
                <View style={{height: 200}} />
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
