import {IDailyMilkRecord} from './DailyMilkRecord';
export interface IDailyRecordResponse {
  mensaje: string;
  records: IDailyMilkRecord[];
}
