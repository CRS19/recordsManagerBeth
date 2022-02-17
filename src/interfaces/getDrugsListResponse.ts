import {IDrug} from './Drug.interface';

export interface IDrugsListResponse {
  message: string;
  drugs: IDrug[];
}
