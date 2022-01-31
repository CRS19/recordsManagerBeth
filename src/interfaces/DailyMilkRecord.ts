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
  prodCicle: string;
  dailyRecords: DailyRecord[];
  calostro: boolean;
  current: boolean;
  last: boolean;
  created: number;
  endCalostroTs: number;
  endLactanciaTs: number;
  _id?: string;
}
