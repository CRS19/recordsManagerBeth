export interface IDailyMilkLabData {
  timestamp: number;
  morningLab: number;
  aftermoonLab: number;
  totalLab: number;
  morningCalf: number;
  aftermoonCalf: number;
  totalCalf: number;
  totalCows: number;
  _id?: string;
}

export interface IDailyMilkLab {
  prodCicle: string;
  monthYear: string;
  data: IDailyMilkLabData[];
  _id?: string;
}
