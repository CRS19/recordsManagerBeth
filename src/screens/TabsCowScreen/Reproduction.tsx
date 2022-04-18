import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {LineChart} from 'react-native-chart-kit';
import {DatePickerGeneralModal} from '../../components/Modals/DatePickerGeneralModal';
import {MonataIaModal} from '../../components/Modals/MonataIaModal';
import {MontaMontaModal} from '../../components/Modals/MontaMontaModal';
import {SelectGeneralSexModal} from '../../components/Modals/SelectGeneralSexModal';
import {SelectModal} from '../../components/Modals/SelectModal';
import {SelectReproductorModal} from '../../components/Modals/SelectReproductorModal';
import {TwoButtomsModal} from '../../components/Modals/TwoButtomsModal';
import {RegisterList} from '../../components/RegisterLIst/RegisterList';
import {GeneralTitle} from '../../components/Titles/GeneralTitle';
import {TopBar} from '../../components/TopBar';
import {
  ABORTO_TYPE,
  PALPATION_TYPES,
  PARTO_TYPE,
  VACIA_OVARIOS,
  VACIA_UTERO,
} from '../../constants/palpationConstants';
import {useTime} from '../../custom/useTime';
import {RecordReproductionType} from '../../interfaces/ReproductionRecord';
import {styles} from '../../theme/GlobalStyles';
import {CenterView} from './Reproduction/CenterView';
import {ReproductionInfoCard} from './Reproduction/ReproductionInfoCard';
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
    isOpenSexModal,
    isOpenTipoPartoModal,
    isOpenPalpationTypeModal,
    isOpenDatePickerModal,
    isOpenTwoBtnModal,
    isOpenMontaMontaModal,
    isOpenSelectReproductionModal,
    openCloseModal,
    recordsSplited,
    selectedRecord,
    reproductoresList,
    recordNumber,
    onSelectCurrentRecord,
    setIsOpenIaModal,
    setIsOpenPalpationTypeModal,
    onAbortoTypePress,
    setRecordToUpdate,
    onPalpTypePress,
    onVaciaTypePress,
    onPartoTypePress,
    onSelectChildSex,
    onNacidoVivoPress,
    onNatimortoPress,
    insertPalpation,
    setIsLoading,
    setIsOpenVaciaTypeModal,
    setIsOpenAbortoTypeModal,
    setIsOpenSelectReproductionModal,
    setIsOpenDatePickerModal,
    setIsOpenTipoPartoModal,
    setIsOpenSexModal,
    setIsOpenTwoModal,
    setIsOpenMontaMontaModal,
    strawList,
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
            {cow.sexo === 'HEMBRA' && (
              <View>
                <View style={{marginTop: 25}}>
                  <RegisterList
                    title={'Registro de chequeo general'}
                    record={recordToUpdate}
                    recordsList={recordsSplited[2]}
                    recordType={RecordReproductionType.GENERAL}
                    selectedRecord={selectedRecord!}
                    onSelectCurrentRecord={onSelectCurrentRecord}
                  />
                </View>
                <View style={{marginTop: 3}}>
                  <RegisterList
                    title={'Registro de parto'}
                    record={recordToUpdate}
                    recordsList={recordsSplited[0]}
                    recordType={RecordReproductionType.PARTO}
                    selectedRecord={selectedRecord!}
                    onSelectCurrentRecord={onSelectCurrentRecord}
                  />
                </View>
                <View style={{marginTop: 3}}>
                  <RegisterList
                    title={'Registro de aborto'}
                    record={recordToUpdate}
                    recordsList={recordsSplited[1]}
                    recordType={RecordReproductionType.ABORTO}
                    selectedRecord={selectedRecord!}
                    onSelectCurrentRecord={onSelectCurrentRecord}
                  />
                </View>
              </View>
            )}
          </View>
          {/** CENTER **/}
          <ScrollView>
            <View
              style={{
                ...styles.RigthGenericTabContainer,
                flex: 0,
                width: 185,
              }}>
              <CenterView
                cow={cow}
                recordNumber={recordNumber.current}
                record={recordToUpdate}
                isLoading={isLoading}
                openCloseIaModal={openCloseModal}
                selectedRecord={selectedRecord}
                currentRecord={recordsSplited[3][0]}
                setIsOpenPalpationTypeModal={setIsOpenPalpationTypeModal}
                setIsOpenTipoPartoModal={setIsOpenTipoPartoModal}
                setIsOpenMontaMontaModal={setIsOpenMontaMontaModal}
                setIsLoading={setIsLoading}
              />
            </View>
            <View style={{height: 200}} />
          </ScrollView>
          {/** Rigth Part **/}
          <View style={styles.RigthAdditionalTabContainer}>
            <ScrollView>
              <View style={{alignItems: 'center'}}>
                <GeneralTitle title={'Historial de Peso'} />
                <View>
                  <LineChart
                    //ARREGLAR ESTA PAERTE URGENTE!!!!

                    //verticalLabelRotation={75} //Degree to rotate
                    data={recordToUpdate.historicalDataToPlot}
                    width={327} // from react-native
                    height={200}
                    yAxisSuffix=" Kg"
                    bezier
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                      backgroundGradientFrom: '#9E7644',
                      backgroundGradientTo: '#E79212',
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                      propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: '#ffa726',
                      },
                    }}
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                  />
                </View>
                {cow.sexo === 'HEMBRA' && (
                  <ReproductionInfoCard record={recordToUpdate} />
                )}
                <View style={{height: 200}} />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <SelectReproductorModal
        openCloseModal={isOpenSelectReproductionModal}
        recordToUpdate={recordToUpdate}
        reproductorsList={reproductoresList}
        setOpenCloseModal={setIsOpenSelectReproductionModal}
        setOpenDatePickerModal={setIsOpenDatePickerModal}
        setIsLoading={setIsLoading}
      />
      <DatePickerGeneralModal
        title={'Seleccione la fecha de posible parto'}
        openCloseModal={isOpenDatePickerModal}
        setOpenCloseModal={setIsOpenDatePickerModal}
        recordToUpdate={recordToUpdate}
      />
      <MonataIaModal
        title={'Ingrese el nombre del inseminador'}
        openCloseModal={isOpenIaModal}
        setOpenCloseModal={setIsOpenIaModal}
        strawList={strawList}
        recordToUpdate={recordToUpdate}
        getPosiblePartoDay={getPosiblePartoDay}
        setIsLoading={setIsLoading}
      />
      <MontaMontaModal
        title={'Seleccione el reproductor'}
        openCloseModal={isOpenMontaMontaModal}
        setOpenCloseModal={setIsOpenMontaMontaModal}
        reproductorsList={reproductoresList}
        getPosiblePartoDay={getPosiblePartoDay}
        recordToUpdate={recordToUpdate}
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
      <SelectModal
        title={'Tipo de Parto'}
        dataOptions={PARTO_TYPE}
        openCloseModal={isOpenTipoPartoModal}
        onCloseModal={onPartoTypePress}
        setOpenCloseModal={setIsOpenTipoPartoModal}
      />
      <SelectGeneralSexModal
        openCloseModal={isOpenSexModal}
        setOpenModal={setIsOpenSexModal}
        onSelectSex={onSelectChildSex}
      />
      <TwoButtomsModal
        openCloseModal={isOpenTwoBtnModal}
        btnTitle1="Nacido vivo"
        btnTitle2="Natimorto"
        onPressBtn1={onNacidoVivoPress}
        onPressBtn2={onNatimortoPress}
        setOpenModal={setIsOpenTwoModal}
      />
    </View>
  );
};
