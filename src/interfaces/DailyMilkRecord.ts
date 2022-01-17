export interface DailyRecord {
  timestamp: number;
  weekNumber: number;
  mornigProd: number;
  afternoonProd: number;
  totalDailyProd: number;
  morningSaved: boolean;
  afremoonSaved: boolean;
}

export interface IDailyMilkRecord {
  idVaca: string;
  dailyRecords: DailyRecord[];
  calostro: boolean;
  current: boolean;
  _id?: string;
}
