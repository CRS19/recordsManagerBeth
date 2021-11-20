import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {MonataIaModal} from '../../components/Modals/MonataIaModal';
import {SelectModal} from '../../components/Modals/SelectModal';
import {RegisterList} from '../../components/RegisterLIst/RegisterList';
import {TopBar} from '../../components/TopBar';
import {
  ABORTO_TYPE,
  PALPATION_TYPES,
  VACIA_OVARIOS,
  VACIA_UTERO,
} from '../../constants/palpationConstants';
import {useTime} from '../../custom/useTime';
import {RecordReproductionType} from '../../interfaces/ReproductionRecord';
import {styles} from '../../theme/GlobalStyles';
import {CenterView} from './Reproduction/CenterView';
import {useReproduction} from './Reproduction/useReproduction';

export const Reproduction = () => {
  const [markedD, setMarkedD] = useState({});

  const {
    recordToUpdate,
    cow,
    record,
    isLoading,
    isOpenIaModal,
    currentPalpations,
    isOpenVaciaTypeModal,
    isOpenAbortoTypeModal,
    isOpenPalpationTypeModal,
    openCloseModal,
    recordsSplited,
    currentRecord,
    reproductoresList,
    onSelectCurrentRecord,
    setIsOpenIaModal,
    setIsOpenPalpationTypeModal,
    onAbortoTypePress,
    setRecordToUpdate,
    onPalpTypePress,
    onVaciaTypePress,
    insertPalpation,
    setIsLoading,
    setIsOpenVaciaTypeModal,
    setIsOpenAbortoTypeModal,
  } = useReproduction();

  const {getPosiblePartoDay} = useTime();

  useEffect(() => {}, [markedD]);

  return (
    <View style={{flexDirection: 'column'}}>
      <TopBar
        hamburguerDisplay={'none'}
        title={'Registro Reproducción'}
        findIcon={false}
        backIcon={false}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.GenericTabContainer}>
          <View style={styles.LeftGenericTabContainer}>
            <Calendar
              markingType={'multi-dot'}
              markedDates={markedD}
              onDayPress={day => {
                const {dateString} = day;
                console.log(dateString);
                console.log(JSON.stringify(markedD, null, 3));
                setMarkedD({
                  [dateString]: {
                    marked: true,
                    selectedColor: 'orange',
                    dots: [
                      {key: 'vacation', color: 'orange'},
                      {key: 'registro', color: 'green'},
                      {key: 'registro2', color: 'blue'},
                      {key: 'registro3', color: 'red'},
                    ],
                  },
                });
              }}
              enableSwipeMonths={true}
            />

            <View style={{marginTop: 6}}>
              <RegisterList
                title={'Registro de chequeo general'}
                record={recordToUpdate}
                recordsList={recordsSplited[2]}
                recordType={RecordReproductionType.GENERAL}
                currentRecord={currentRecord!}
                onSelectCurrentRecord={onSelectCurrentRecord}
              />
            </View>
            <View style={{marginTop: 3}}>
              <RegisterList
                title={'Registro de aprto'}
                record={recordToUpdate}
                recordsList={recordsSplited[0]}
                recordType={RecordReproductionType.PARTO}
                currentRecord={currentRecord!}
                onSelectCurrentRecord={onSelectCurrentRecord}
              />
            </View>
            <View style={{marginTop: 3}}>
              <RegisterList
                title={'Registro de aborto'}
                record={recordToUpdate}
                recordsList={recordsSplited[1]}
                recordType={RecordReproductionType.ABORTO}
                currentRecord={currentRecord!}
                onSelectCurrentRecord={onSelectCurrentRecord}
              />
            </View>
          </View>
          {/** CENTER **/}
          <ScrollView>
            <View
              style={{
                ...styles.RigthGenericTabContainer,
                flex: 0,
                width: 228,
              }}>
              <CenterView
                cow={cow}
                record={recordToUpdate}
                isLoading={isLoading}
                openCloseIaModal={openCloseModal}
                currentRecord={currentRecord}
                recordsList={recordsSplited[3]}
                setIsOpenPalpationTypeModal={setIsOpenPalpationTypeModal}
                setIsLoading={setIsLoading}
              />
              <TouchableOpacity
                onPress={() => {
                  console.log(JSON.stringify(recordToUpdate, null, 3));
                  getPosiblePartoDay();
                }}>
                <Text>Ver registro del store</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log(JSON.stringify(currentRecord, null, 3));
                }}>
                <Text>Ver current registro en el store</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log(JSON.stringify(currentPalpations, null, 3));
                }}>
                <Text>Ver current palpations </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log(JSON.stringify(recordsSplited[3], null, 3));
                }}>
                <Text>Ver current record sin tipo de registro </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: 200}} />
          </ScrollView>
          <View style={styles.RigthAdditionalTabContainer}>
            <Text>parte derecha</Text>
          </View>
        </View>
      </View>
      <MonataIaModal
        title={'Ingrese el nombre del inseminador'}
        onCloseModal={() => console.log('jelp')}
        openCloseModal={isOpenIaModal}
        setOpenCloseModal={setIsOpenIaModal}
        setRecordToUpdate={setRecordToUpdate}
        reproductorsList={reproductoresList}
        recordToUpdate={recordToUpdate}
        getPosiblePartoDay={getPosiblePartoDay}
        setIsLoading={setIsLoading}
      />
      <SelectModal
        title={'Seleccione tipo'}
        dataOptions={PALPATION_TYPES}
        openCloseModal={isOpenPalpationTypeModal}
        onCloseModal={onPalpTypePress}
        setOpenCloseModal={setIsOpenPalpationTypeModal}
      />
      <SelectModal
        title={'Ovarios'}
        title2={'Utero'}
        dataOptions={VACIA_OVARIOS}
        dataOptions2={VACIA_UTERO}
        openCloseModal={isOpenVaciaTypeModal}
        onCloseModal={onVaciaTypePress}
        setOpenCloseModal={setIsOpenVaciaTypeModal}
      />
      <SelectModal
        title={'Tipo de Aborto'}
        dataOptions={ABORTO_TYPE}
        openCloseModal={isOpenAbortoTypeModal}
        onCloseModal={onAbortoTypePress}
        setOpenCloseModal={setIsOpenAbortoTypeModal}
      />
    </View>
  );
};
