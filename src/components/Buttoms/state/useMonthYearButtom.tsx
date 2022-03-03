import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ThunkAction} from 'redux-thunk';
import {
  getDailyMilkLabRecordsByMonth,
  getDrugsList,
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
  componentName: string;
}

export const useMonthYearButtom = ({
  componentName,
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
    string,
    ThunkAction<void, IAppState, undefined, IAppAction>
  > = {
    ['CalendarButtom']: getDailyMilkLabRecordsByMonth(
      `${MONTHS[monthNumber]}-${year}`,
    ),
    ['YearButtomFilter']: getDrugsList(),
  };

  useEffect(() => {
    dispatch(DISTATCH_ACTIONS[componentName]);
  }, [monthNumber, year]);

  return {monthNumber, setMonthNmber, setYear, year, yearArray};
};
