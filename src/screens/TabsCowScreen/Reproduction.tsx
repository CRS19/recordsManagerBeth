import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {MonataIaModal} from '../../components/Modals/MonataIaModal';
import {RegisterList} from '../../components/RegisterLIst/RegisterList';
import {TopBar} from '../../components/TopBar';
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
    openCloseModal,
    currentRecord,
    reproductoresList,
    onSelectCurrentRecord,
    setIsOpenIaModal,
    setRecordToUpdate,
    setIsLoading,
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
            <View>
              <RegisterList
                title={'Registro de partos'}
                record={recordToUpdate}
                recordType={RecordReproductionType.PARTO}
                currentRecord={currentRecord!}
                onSelectCurrentRecord={onSelectCurrentRecord}
              />
            </View>
            <View>
              <RegisterList
                title={'Registro de abortos'}
                record={recordToUpdate}
                currentRecord={currentRecord!}
                recordType={RecordReproductionType.ABORTO}
                onSelectCurrentRecord={onSelectCurrentRecord}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log(JSON.stringify(recordToUpdate, null, 3));
                getPosiblePartoDay();
              }}>
              <Text>Ver registro del store</Text>
            </TouchableOpacity>
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
              />
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
    </View>
  );
};
