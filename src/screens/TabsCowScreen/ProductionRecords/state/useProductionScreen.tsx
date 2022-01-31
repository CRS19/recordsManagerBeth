import {isEmpty, isNil, isUndefined} from 'lodash';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {IIndivitualProductionViewProps} from '../../../../components/IndividualProductionView/IndividualProductionView';
import {ICow} from '../../../../interfaces/CowInterface';
import {IDailyMilkRecord} from '../../../../interfaces/DailyMilkRecord';
import {IAppState} from '../../../../store/reducer';
import {getDateOfDay} from '../../../../utils/time-utils';
import {ICalendarSelected} from '../../../MilkDailyRegister/state/useMilkDailyRegister';

export interface IUseProductionScreen {
  cow: ICow;
  prodRecord: IDailyMilkRecord[];
  markedD: ICalendarSelected;
  setMarkedD: React.Dispatch<React.SetStateAction<ICalendarSelected>>;
  IndivitualProdProps: IIndivitualProductionViewProps;
}

export const useProductionScreen = (): IUseProductionScreen => {
  const cow = useSelector((state: IAppState) => state.CurrentCow!);
  const prodRecord = useSelector(
    (state: IAppState) => state.currentCowDailyRecord!,
  );
  const [markedD, setMarkedD] = useState<ICalendarSelected>({
    [getDateOfDay(moment.now())]: {
      selected: true,
      selectedColor: 'orange',
      activeOpacity: 0,
    },
  });

  const getRecordByDate = (strDate: string): IIndivitualProductionViewProps => {
    if (!isEmpty(prodRecord)) {
      const currentRecord = prodRecord.find(
        DailyRecods => DailyRecods.current === true,
      );

      if (!isNil(currentRecord)) {
        //*********
        console.log('DEBUG: obteniendo datos del registro CURRENT');
        const recordByDate = currentRecord.dailyRecords.filter(
          record => getDateOfDay(record.timestamp) === strDate,
        );

        if (!isEmpty(recordByDate)) {
          return {
            morningValue: String(recordByDate[0].mornigProd),
            afternoonValue: String(recordByDate[0].afternoonProd),
          };
        } else {
          return {
            morningValue: '0',
            afternoonValue: '0',
          };
        }
        //******
      } else {
        // insert codigo aqui

        const lastRecord = prodRecord.find(
          DailyRecords => DailyRecords.last === true,
        );

        if (!isNil(lastRecord)) {
          console.log('DEBUG: obteniendo datos del registro LAST');
          const recordByDate = lastRecord.dailyRecords.filter(
            record => getDateOfDay(record.timestamp) === strDate,
          );
          if (!isEmpty(recordByDate)) {
            return {
              morningValue: String(recordByDate[0].mornigProd),
              afternoonValue: String(recordByDate[0].afternoonProd),
            };
          } else {
            return {
              morningValue: '0',
              afternoonValue: '0',
            };
          }
        }
        // duda
        return {
          morningValue: '0',
          afternoonValue: '0',
        };
      }
    } else {
      return {
        morningValue: '0',
        afternoonValue: '0',
      };
    }
  };

  const [IndivitualProdProps, setIndivitualProdProps] =
    useState<IIndivitualProductionViewProps>(
      getRecordByDate(getDateOfDay(moment.now())),
    );

  useEffect(() => {
    console.log('Debug: fecha: ', Object.keys(markedD)[0]);
    setIndivitualProdProps(getRecordByDate(Object.keys(markedD)[0]));
  }, [markedD]);

  useEffect(() => {
    console.log('obtener datos a graficar');
  });

  return {
    cow,
    prodRecord,
    markedD,
    setMarkedD,
    IndivitualProdProps,
  };
};
