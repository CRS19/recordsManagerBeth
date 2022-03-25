import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {DescarteBottom} from '../../../components/Buttoms/DescarteBottom';
import {PrintQrButtom} from '../../../components/Buttoms/PrintQrButtom';
import {SaveButtom} from '../../../components/Buttoms/SaveButtom';
import {AddImage} from '../../../components/Images/AddImagesButtom/AddImage';
import {GestacionInputCardView} from '../../../components/InputCard/GestacionInputCardView';
import {InputCardCaracteristicsView} from '../../../components/InputCard/InputCardCaracteristicsView';
import {InputCardDesteteView} from '../../../components/InputCard/InputCardDesteteView';
import {InputCardView} from '../../../components/InputCard/InputCardView';
import {defaultTo} from 'lodash';
import {LactanciaInputCardView} from '../../../components/InputCard/LactanciaInputCardView';
import {InputPeso} from '../../../components/PesoHistory/InputPeso';
import {GeneralTitle} from '../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../components/TopBar';
import {ICowKeys} from '../../../constants/ICowKeysEnum';
import {API_BASE_PATH} from '../../../env/environment';
import {ICow} from '../../../interfaces/CowInterface';
import {IAppState} from '../../../store/reducer';
import {styles} from '../../../theme/GlobalStyles';
import {emptyCow} from '../../../VaquitasPrueba/vacas';

export const MainRecordView = () => {
  const [cow, setCow] = useState<ICow>(emptyCow);
  const [open, setOpen] = useState<boolean>(false);
  const [propertyFecha, setPropertyFecha] = useState<ICowKeys>(
    ICowKeys.fechaDeNacimiento,
  );
  const currentCow = useSelector((state: IAppState) => state.CurrentCow!);

  return (
    <View style={{flexDirection: 'column'}}>
      <TopBar
        hamburguerDisplay={'none'}
        title={'Registro Master'}
        findIcon={false}
        backIcon={false}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.GenericTabContainer}>
          <View style={styles.LeftGenericTabContainer}>
            <Image
              style={{
                margin: 5,
                width: 375,
                height: 270,
                backgroundColor: 'red',
              }}
              source={{
                uri: `${API_BASE_PATH}/cow/getImage/${
                  defaultTo(currentCow.imagenPath[0], 'a/').split('/')[2]
                }`,
              }}
            />
            <Image
              style={{
                margin: 5,
                width: 375,
                height: 270,
                backgroundColor: 'red',
              }}
              source={{
                uri: `${API_BASE_PATH}/cow/getImage/${
                  defaultTo(currentCow.imagenPath[1], 'a/').split('/')[2]
                }`,
              }}
            />
          </View>
          {/* rigth part */}

          <ScrollView>
            <View style={{flexDirection: 'row-reverse'}}>
              <View style={{alignItems: 'center'}}>
                <Text>hola como ess</Text>
                <DescarteBottom />
                <PrintQrButtom />
                {/**  TODO logica de actualizar **/}
                <SaveButtom onPress={() => {}} />
              </View>
              <View>
                <GeneralTitle title={'Identificación'} />

                <View style={styles.RigthGenericTabContainer}>
                  <View>
                    <View
                      style={{
                        width: 340,
                        height: 430,
                        marginLeft: 40,
                        marginBottom: 20,
                      }}>
                      <InputCardView value={currentCow!} />
                    </View>
                    <View
                      style={{
                        width: 340,
                        height: 160,
                        marginLeft: 40,
                        marginBottom: 20,
                      }}>
                      <InputPeso
                        title1={'Nacimiento'}
                        title2={'Peso al Deste'}
                        title3={'Peso Actual'}
                        value1={`${currentCow.pesoNacimiento}`}
                        value2={`${currentCow.pesoAlDestete}`}
                        value3={`${currentCow.pesoActual}`}
                      />
                    </View>
                    {currentCow.sexo.toUpperCase() === 'HEMBRA' ? (
                      <View
                        style={{
                          backgroundColor: '#00FFD5',
                          width: 340,
                          height: 264,
                          marginLeft: 40,
                          marginBottom: 20,
                        }}>
                        <LactanciaInputCardView value={currentCow} />
                      </View>
                    ) : (
                      <View />
                    )}
                  </View>
                  <View>
                    <View
                      style={{
                        backgroundColor: '#03DAC5',
                        width: 337,
                        height: 373,
                        marginLeft: 40,
                        marginBottom: 20,
                      }}>
                      <InputCardCaracteristicsView
                        value={currentCow!}
                        setValue={setCow}
                        onSave={() => {}}
                        hasMomDad={true}
                        openMomDataModal={setOpen}
                        setOpenDadDataModal={setOpen}
                        isInsert={false}
                      />
                    </View>

                    <View>
                      {currentCow.pesoAlDestete !== 0 && (
                        <View
                          style={{
                            backgroundColor: '#3205AF',
                            width: 337,
                            height: 188,
                            marginLeft: 40,
                            marginBottom: 20,
                          }}>
                          <InputCardDesteteView value={currentCow} />
                        </View>
                      )}
                    </View>

                    {currentCow.sexo.toUpperCase() === 'HEMBRA' ? (
                      <View
                        style={{
                          backgroundColor: '#FF0000',
                          width: 337,
                          height: 312,
                          marginLeft: 40,
                          marginBottom: 20,
                        }}>
                        <GestacionInputCardView
                          value={currentCow}
                          setValue={setCow}
                          openEdadPrimerPartoModal={setOpen}
                          setPropertyFecha={setPropertyFecha}
                          onSave={() => {}}
                          isSaved={true}
                          openDatePickerModal={setOpen}
                        />
                      </View>
                    ) : (
                      <View />
                    )}
                    <View style={{height: 400, width: 300}} />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
