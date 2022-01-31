import React, {useCallback, useEffect, useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {Text, TextInput, View} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import {IDailyMilkRecord} from '../../../interfaces/DailyMilkRecord';
import {styles} from '../../../theme/GlobalStyles';
import {
  getDateOfDay,
  getMomentOfDay,
  getTimestamp,
  getWeekNumber,
  isMorning,
} from '../../../utils/time-utils';
import {get} from 'lodash';

export interface IDailyRowProps {
  cowInfo?: IDailyMilkRecord;
  index?: number;
  isHead?: boolean;
  changeCalostroProductivaInfo?: (
    idVaca: string,
    payload: boolean,
    calostro: boolean,
  ) => void;
}

export interface milkDailyState {
  morning: string;
  afernoon: string;
}

export const DailyRow = ({
  isHead = false,
  cowInfo,
  index,
  changeCalostroProductivaInfo,
}: IDailyRowProps) => {
  console.log('DEBUG: DailyRow render');
  const getLLenadoColor = () => {
    if (isMorning()) {
      if (morningAfternoonMilk.morning === '0') {
        return '#E2A3A3';
      } else {
        return '#A7D198';
      }
    } else {
      if (morningAfternoonMilk.afernoon === '0') {
        return '#E2A3A3';
      } else {
        return '#A7D198';
      }
    }
  };
  const getDailyMilkInitialState = (): milkDailyState => {
    if (!!cowInfo) {
      console.log('------------------ ', cowInfo.idVaca);
      console.log(
        'Fecha del ultimo registro -> ',
        getDateOfDay(
          get(
            cowInfo.dailyRecords[cowInfo.dailyRecords.length - 1],
            'timestamp',
            0,
          ),
        ),
      );
      console.log('Fecha de hoy -> ', getDateOfDay(getTimestamp()));
      if (
        getDateOfDay(
          get(
            cowInfo.dailyRecords[cowInfo.dailyRecords.length - 1],
            'timestamp',
            0,
          ),
        ) !== getDateOfDay(getTimestamp()) ||
        cowInfo.dailyRecords.length === 0
      ) {
        console.log('registro agregado....');
        cowInfo.dailyRecords.push({
          timestamp: getTimestamp(),
          weekNumber: getWeekNumber(),
          mornigProd: 0,
          afternoonProd: 0,
          totalDailyProd: 0,
          morningSaved: false,
          afremoonSaved: false,
        });

        return {
          morning: String(
            cowInfo.dailyRecords[cowInfo.dailyRecords.length - 1].mornigProd,
          ),
          afernoon: String(
            cowInfo.dailyRecords[cowInfo.dailyRecords.length - 1].afternoonProd,
          ),
        };
      } else {
        return {
          morning: String(
            get(
              cowInfo.dailyRecords[cowInfo.dailyRecords.length - 1],
              'mornigProd',
              '0',
            ),
          ),
          afernoon: String(
            get(
              cowInfo.dailyRecords[cowInfo.dailyRecords.length - 1],
              'afternoonProd',
              '0',
            ),
          ),
        };
      }
    } else
      return {
        morning: '0',
        afernoon: '0',
      };
  };

  const [morningAfternoonMilk, setMorningAfternoonMilk] =
    useState<milkDailyState>(getDailyMilkInitialState());
  const [color, setColor] = useState(
    get(cowInfo, 'calostro', false) ? '#F4FBA2' : getLLenadoColor(),
  );

  useEffect(() => {
    console.log(morningAfternoonMilk);
    if (morningAfternoonMilk.morning !== '0') {
      if (isNaN(Number(morningAfternoonMilk.morning))) {
        Alert.alert(
          'Error de entrada',
          'Porfavor ingrese un numero válido ejemplo: 30.04',
        );
        setMorningAfternoonMilk({...morningAfternoonMilk, morning: '0'});
      } else {
        cowInfo!.dailyRecords[cowInfo!.dailyRecords.length - 1].mornigProd =
          Number(morningAfternoonMilk.morning);
        cowInfo!.dailyRecords[cowInfo!.dailyRecords.length - 1].totalDailyProd =
          Number(morningAfternoonMilk.morning) +
          Number(morningAfternoonMilk.afernoon);
      }
    }
    if (morningAfternoonMilk.afernoon !== '0') {
      if (isNaN(Number(morningAfternoonMilk.afernoon))) {
        console.log(morningAfternoonMilk.afernoon);
        Alert.alert(
          'Error de entrada',
          'Porfavor ingrese un numero válido ejemplo: 30.04',
        );
        setMorningAfternoonMilk({...morningAfternoonMilk, afernoon: '0'});
      } else {
        cowInfo!.dailyRecords[cowInfo!.dailyRecords.length - 1].afternoonProd =
          Number(morningAfternoonMilk.afernoon);
        cowInfo!.dailyRecords[cowInfo!.dailyRecords.length - 1].totalDailyProd =
          Number(morningAfternoonMilk.morning) +
          Number(morningAfternoonMilk.afernoon);
      }
    }
    getColor();
  }, [morningAfternoonMilk]);

  useEffect(() => {
    console.log('cambiando el cow');
    getColor();
  }, [cowInfo]);

  const headRow = () => {
    getWeekNumber();
    return (
      <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
        <View style={{...styles.DailyMilkRow}}>
          <Text style={{fontSize: 18}}>#</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 112}}>
          <Text style={{fontSize: 18}}>Nombre</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 95}}>
          <Text style={{fontSize: 18}}>{'N° de \narete'}</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 105}}>
          <Text style={{fontSize: 18}}>Mañana</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 105}}>
          <Text style={{fontSize: 18}}>Tarde</Text>
        </View>
        <View style={{...styles.DailyMilkRow, width: 105, borderRightWidth: 2}}>
          <Text style={{fontSize: 18}}>Diario Total</Text>
        </View>
      </View>
    );
  };

  const getColor = () => {
    setColor(cowInfo?.calostro ? '#F4FBA2' : getLLenadoColor());
  };

  const cowRow = () => {
    const name = cowInfo!.idVaca.split('-')[0];
    const areteNumber = cowInfo!.idVaca.split('-')[1];
    return (
      <View style={{flexDirection: 'row', backgroundColor: color}}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          activeOpacity={0.8}
          onPress={() => {
            Alert.alert(
              cowInfo!.calostro
                ? 'VACA EN CALOSTRO DESEAS DAR FIN?'
                : `Estas seguro de secar a la vaca ${cowInfo!.idVaca
                    .split('-')[0]
                    .toUpperCase()} con N° de arete ${cowInfo!.idVaca
                    .split('-')[1]
                    .toUpperCase()}`,
              '',
              [
                {
                  text: 'NO',
                  onPress: () => {},
                  style: 'cancel',
                },
                {
                  text: 'SI',
                  onPress: () => {
                    getColor();
                    changeCalostroProductivaInfo!(
                      index!.toString(),
                      false,
                      cowInfo!.calostro,
                    );
                  },
                },
              ],
            );
          }}>
          <View style={{...styles.DailyMilkRow, borderTopWidth: 0}}>
            <Text style={{fontSize: 18}}>{index}</Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 112, borderTopWidth: 0}}>
            <Text style={{fontSize: 18, textTransform: 'uppercase'}}>
              {name}
            </Text>
          </View>
          <View style={{...styles.DailyMilkRow, width: 95, borderTopWidth: 0}}>
            <Text style={{fontSize: 18}}>{areteNumber}</Text>
          </View>
        </TouchableOpacity>
        <View style={{...styles.DailyMilkRow, width: 105, borderTopWidth: 0}}>
          <TextInput
            editable={
              isMorning() &&
              !cowInfo!.calostro &&
              !cowInfo!.dailyRecords[cowInfo!.dailyRecords.length - 1]
                .morningSaved
            }
            style={{fontSize: 18}}
            keyboardType={'decimal-pad'}
            value={morningAfternoonMilk.morning.toString()}
            selectTextOnFocus={true}
            onChangeText={text => {
              setMorningAfternoonMilk({
                ...morningAfternoonMilk,
                morning: text,
              });
            }}
          />
        </View>
        <View style={{...styles.DailyMilkRow, width: 105, borderTopWidth: 0}}>
          <TextInput
            editable={
              !isMorning() &&
              !cowInfo!.calostro &&
              !cowInfo!.dailyRecords[cowInfo!.dailyRecords.length - 1]
                .afremoonSaved
            }
            style={{fontSize: 18}}
            keyboardType={'decimal-pad'}
            selectTextOnFocus={true}
            value={morningAfternoonMilk.afernoon.toString()}
            onChangeText={text => {
              setMorningAfternoonMilk({
                ...morningAfternoonMilk,
                afernoon: text,
              });
            }}
          />
        </View>
        <View
          style={{
            ...styles.DailyMilkRow,
            width: 105,
            borderRightWidth: 2,
            borderTopWidth: 0,
          }}>
          <Text style={{fontSize: 18}}>
            {Number(morningAfternoonMilk.afernoon) +
              Number(morningAfternoonMilk.morning)}
          </Text>
        </View>
      </View>
    );
  };

  return isHead ? <View>{headRow()}</View> : <View>{cowRow()}</View>;
};
