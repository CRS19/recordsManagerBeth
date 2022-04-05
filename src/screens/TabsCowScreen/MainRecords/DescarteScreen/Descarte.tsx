import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {BallButtom} from '../../../../components/Buttoms/BallButtom';
import {BorderButtom} from '../../../../components/Buttoms/BorderButtom';
import {InputWitnessesCards} from '../../../../components/InputCard/InputWitnessesCards';
import {BoxTitle} from '../../../../components/Titles/BoxTitle';
import {GeneralTitle} from '../../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../../components/TopBar';
import {TabScreensParams} from '../../../../navigation/TabNavigatorCow';
import {styles} from '../../../../theme/GlobalStyles';
import {getMaxDate} from '../../../../utils/time-utils';
import {IWitness} from './Interfaces/Descarte.interface';
import {useDescarte} from './state/useDescarte';

export const Descarte = ({
  route,
}: StackScreenProps<TabScreensParams, 'Descarte'>) => {
  const {setMarkedD, markedD, dayInfo, deathCertificate, actions} = useDescarte(
    {
      currentCow: route.params.currentCow,
    },
  );

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
                      title="ACTA DE DEFUNCIÓN #01"
                    />
                    <GeneralTitle
                      title={`EN LA FACULTAD DE CIENCIAS PECUARIAS A LOS ${dayInfo.numberDay} DÍAS DEL MES DE ${dayInfo.month} DE ${dayInfo.year}`}
                      width={840}
                    />
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        {deathCertificate.witnesses.map(
                          (witness: IWitness, index: number) => (
                            <View key={`wt-${index}`}>
                              <InputWitnessesCards
                                {...actions.InputWitnessesCardsActions}
                                witnessPosition={index}
                              />
                            </View>
                          ),
                        )}
                      </View>
                      <View>
                        <BallButtom
                          title="+"
                          onPress={() => {
                            actions.addOtherWitness();
                          }}
                        />
                        <BallButtom
                          title="-"
                          onPress={() => {
                            actions.deleteWitness();
                          }}
                        />
                      </View>
                    </View>

                    <GeneralTitle
                      title="Con motivo de constatar la muerte del semobiente de la propiedad de la Escuela de Ingeniría Zootécnica, distinguido de las siguientes caracteristicas: "
                      width={840}
                      textTransform="none"
                      textAling="left"
                    />
                    <View style={{margin: 20}}>
                      <BorderButtom
                        title="Guardar"
                        onPress={() => console.log('guardar : ')}
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
