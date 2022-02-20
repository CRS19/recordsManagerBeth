import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {TopBar} from '../../../../components/TopBar';
import {styles} from '../../../../theme/GlobalStyles';
import {Calendar} from 'react-native-calendars';
import {LabelIconChip} from '../../../../components/LabelIconChip/LabelIconChip';
import {useDiagnosis} from './state/useDiagnosis';
import {DiagnosisIcon} from '../../../../assets/DiagnosisIcon';
import {BallButtom} from '../../../../components/Buttoms/BallButtom';
import {BorderButtom} from '../../../../components/Buttoms/BorderButtom';
import {DiagnosisInputCard} from '../../../../components/InputCard/DiagnosisInputCard';
import {SetDrugFrequency} from '../../../../components/Modals/SetDrugFrequency';
import {LoadingModal} from '../../../../components/Modals/LoadingModal';

export const Diagnostico = () => {
  const [markedD, setMarkedD] = useState({});

  const {
    labelChipProps,
    drugsForms,
    addAnotherDrug,
    setDrugsForms,
    daignosisText,
    validDiagnosisDescription,
    drugs,
    frequencyProps,
    openFrequencyModal,
    onSave,
    isLoading,
    setDiagnosisText,
  } = useDiagnosis();

  useEffect(() => {}, [markedD]);
  return (
    <View>
      <TopBar backIcon={true} title="Diagóstico" />
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
          </View>
          <ScrollView>
            <View
              style={{
                ...styles.RigthGenericTabContainer,
                flex: 1,
                width: '100%',
                flexDirection: 'column',
                paddingLeft: 50,
              }}>
              <LabelIconChip {...labelChipProps} />
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <DiagnosisIcon />
                <View style={{paddingLeft: 25}}>
                  <Text style={{color: '#6200EE', fontSize: 18}}>
                    Diagnostico
                  </Text>
                  <TextInput
                    style={{
                      borderStartColor: 'red',
                      maxWidth: 650,
                      color: '#000000',
                      fontSize: 16,
                    }}
                    value={daignosisText}
                    multiline={true}
                    onChangeText={text => {
                      setDiagnosisText(text);
                    }}
                  />
                </View>
              </View>
              {!validDiagnosisDescription && (
                <Text
                  style={{
                    position: 'absolute',
                    color: 'red',
                    left: 180,
                    top: 160,
                  }}>
                  Ingrese una descripción
                </Text>
              )}
              <View
                style={{
                  marginVertical: 15,
                  height: 5,
                  width: 741,
                  backgroundColor: '#6200EE',
                }}
              />

              <View style={{flex: 1, flexDirection: 'row'}}>
                <ScrollView horizontal={true}>
                  {drugsForms.map((drugForm, index) => (
                    <View key={`${index}-form`}>
                      <DiagnosisInputCard
                        form={drugForm}
                        formIndex={index}
                        drugs={drugs}
                        setForm={setDrugsForms}
                        openFrequencyModal={openFrequencyModal}
                      />
                      <View key={`${index}-space`} style={{height: 10}} />
                    </View>
                  ))}
                </ScrollView>
                <BallButtom
                  title="+"
                  onPress={() => {
                    addAnotherDrug();
                  }}
                />
              </View>
              <View style={{marginTop: 10}}>
                <BorderButtom title="Guardar" onPress={onSave} />
              </View>
              <View style={{height: 250}} />
            </View>
          </ScrollView>
        </View>
      </View>
      <SetDrugFrequency {...frequencyProps} />
      <LoadingModal
        title="Guardando diagnóstico y tratamientos"
        openCloseModal={isLoading}
      />
    </View>
  );
};
