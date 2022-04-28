import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ThunkAction} from 'redux-thunk';
import {CalendarActionsEnum} from '../../../constants/CalendarButtomConstants';
import {
  getDailyMilkLabRecordsByMonth,
  getDrugsList,
  getInseminacionesMontasByMonth,
  getInventoryCows,
  getPreñezReportInfoByMonth,
  IAppAction,
} from '../../../store/actionCreators';
import {IAppState} from '../../../store/reducer';
import {getMonthNumber, getYear, MONTHS} from '../../../utils/time-utils';

export interface IUseMonthYearButtom {
  monthNumber: number;
  year: number;
  setMonthNmber: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  yearArray: number[];
}

export interface IUseMonthYearButtomProps {
  calendarAction: CalendarActionsEnum;
}

export const useMonthYearButtom = ({
  calendarAction,
}: IUseMonthYearButtomProps): IUseMonthYearButtom => {
  const dispatch = useDispatch();
  const [monthNumber, setMonthNmber] = useState<number>(getMonthNumber() - 1);
  const [year, setYear] = useState<number>(Number(getYear()));
  let yearArray = [0];
  let interval = 10;
  for (let i = 0; i <= 20; i++) {
    yearArray.push(year - interval);
    interval = interval - 1;
  }

  const DISTATCH_ACTIONS: Record<
    CalendarActionsEnum,
    ThunkAction<void, IAppState, undefined, IAppAction>
  > = {
    [CalendarActionsEnum.GET_DAILY_MILK]: getDailyMilkLabRecordsByMonth(
      `${MONTHS[monthNumber]}-${year}`,
    ),
    [CalendarActionsEnum.GET_DRUGS_LIST]: getDrugsList(),
    [CalendarActionsEnum.GET_INSEMINACIONES_MONTAS]:
      getInseminacionesMontasByMonth(`${MONTHS[monthNumber]}-${year}`),
    [CalendarActionsEnum.GET_PREÑEZ_MONTA]: getPreñezReportInfoByMonth(
      `${MONTHS[monthNumber]}-${year}`,
    ),
    [CalendarActionsEnum.GET_COWS_INVENTORY]: getInventoryCows(
      `${MONTHS[monthNumber]}-${year}`,
    ),
  };

  useEffect(() => {
    dispatch(DISTATCH_ACTIONS[calendarAction]);
  }, [monthNumber, year]);

  return {monthNumber, setMonthNmber, setYear, year, yearArray};
};
