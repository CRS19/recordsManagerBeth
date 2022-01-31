import {IDailyMilkRecord} from '../../../../interfaces/DailyMilkRecord';
import {
  getDateOfDay,
  getDiffDays,
  getMonthNumber,
} from '../../../../utils/time-utils';

export interface IUseDailyMilkingProdReportBuilderProps {
  dailyRecord: IDailyMilkRecord;
}

export interface ITableDailyMilkingReport {
  day: string;
  date: string;
  morning: string;
  afternoon: string;
  dailyTotal: string;
  semnalProd: string;
  monthProd: string;
  TotalProd: string;
  averageProd: string;
}

export interface IuseDailyMilkingProdReportBuilder {
  dataToPlot: ITableDailyMilkingReport[];
}

export const useDailyMilkingProdReportBuilder = ({
  dailyRecord,
}: IUseDailyMilkingProdReportBuilderProps): IuseDailyMilkingProdReportBuilder => {
  const buildData = () => {
    let accProd = 0;
    const dataToPlot: ITableDailyMilkingReport[] = dailyRecord.dailyRecords.map(
      (record, index) => {
        accProd = accProd + record.totalDailyProd;
        return {
          day: (
            Number(getDiffDays(dailyRecord.endCalostroTs, record.timestamp)) + 1
          ).toString(),
          date: getDateOfDay(record.timestamp, 'DD/MM/yyyy'),
          morning: record.mornigProd.toString(),
          afternoon: record.afternoonProd.toString(),
          dailyTotal: record.totalDailyProd.toString(),
          semnalProd: getWeekTotalProd(record.weekNumber).toString(),
          monthProd: getMonthProd(
            getMonthTotalProd(record.timestamp),
          ).toString(),
          TotalProd: accProd.toString(),
          averageProd: (accProd / (index + 1)).toFixed(2).toString(),
        };
      },
    );

    return dataToPlot;
  };

  const getWeekTotalProd = (weekNumber: number) => {
    const week = dailyRecord.dailyRecords.reduce(
      (acc, record) => ({
        ...record,
        totalDailyProd:
          record.weekNumber === weekNumber
            ? acc.totalDailyProd + record.totalDailyProd
            : acc.totalDailyProd + 0,
      }),
      {
        timestamp: 0,
        weekNumber: 0,
        mornigProd: 0,
        afternoonProd: 0,
        totalDailyProd: 0,
        morningSaved: false,
        afremoonSaved: false,
      },
    );

    return week.totalDailyProd;
  };

  const getMonthProd = (monthNumber: number) => {
    const month = dailyRecord.dailyRecords.reduce(
      (acc, record) => ({
        ...record,
        totalDailyProd:
          getMonthTotalProd(record.timestamp) === monthNumber
            ? acc.totalDailyProd + record.totalDailyProd
            : acc.totalDailyProd + 0,
      }),
      {
        timestamp: 0,
        weekNumber: 0,
        mornigProd: 0,
        afternoonProd: 0,
        totalDailyProd: 0,
        morningSaved: false,
        afremoonSaved: false,
      },
    );

    return month.totalDailyProd;
  };

  const getMonthTotalProd = (recordTs: number) => {
    return getMonthNumber(recordTs);
  };

  const dataToPlot = buildData();

  return {dataToPlot};
};
