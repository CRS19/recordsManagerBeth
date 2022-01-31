import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Marker} from 'react-native-svg';
import {useSelector} from 'react-redux';
import {LabelIconChip} from '../../../../../components/LabelIconChip/LabelIconChip';
import {GeneralTitle} from '../../../../../components/Titles/GeneralTitle';
import {TopBar} from '../../../../../components/TopBar';
import {VacunaHistorico} from '../../../../../components/VacunaHistorico/VacunaHistorico';
import {ICowKeys} from '../../../../../constants/ICowKeysEnum';
import {IAppState} from '../../../../../store/reducer';
import {styles} from '../../../../../theme/GlobalStyles';

export const Brucelosis = () => {
  console.log('DEBUG: Brucelosis');

  const {nombre, numeroDeArete} = useSelector(
    (state: IAppState) => state.CurrentCow!,
  );

  return (
    <View style={{flexDirection: 'column'}}>
      <TopBar
        hamburguerDisplay={'none'}
        title={'Vacuna Brucelosis'}
        findIcon={false}
        backIcon={false}
      />
      <View />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.GenericTabContainer}>
          <View style={styles.LeftGenericTabContainer}>
            <Calendar
              markingType={'multi-dot'}
              onDayPress={day => {
                const {dateString} = day;
                console.log(dateString);
                console.log(JSON.stringify(Marker, null, 3));
                ({
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
          <View
            style={{
              maxWidth: 400,
            }}>
            <View style={{marginLeft: 20}}>
              <LabelIconChip name={nombre} areteNumber={numeroDeArete} />
              <View style={{marginTop: 20}}>
                <GeneralTitle title={'Brucelosis'} />
              </View>
            </View>
          </View>
          <View
            style={{
              ...styles.RigthGenericTabContainer,
              maxWidth: 500,
              marginLeft: 50,
            }}>
            <ScrollView>
              <View style={{marginLeft: 0}}>
                <View style={{marginTop: 101}} />
                <GeneralTitle title={'Historico Brucelosis'} />

                <VacunaHistorico />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};
