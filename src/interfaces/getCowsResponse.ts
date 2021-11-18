import {ICow} from './CowInterface';

export interface getCowsResponse {
  mesage: string;
  next: string;
  count: string;
  cows: ICow[];
}
