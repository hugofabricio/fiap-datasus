import { Document } from 'mongoose';
import { Cid } from '../../cid/interfaces/cid.interface';

export interface Statistic extends Document {
  readonly disease: Cid;
  readonly cid: string;
  readonly year: string;
  readonly cost_year: number;
  readonly cost_per_case: number;
  readonly age: number;
  readonly mortality: number;
  readonly mortality_rate: number;
  readonly days_hospitalized: number;
  readonly cases: number;
  readonly cases_female: number;
  readonly cases_male: number;
  readonly cases_sp: number;
  readonly cases_undefined_gender: number;
  readonly cases_white: number;
  readonly cases_black: number;
  readonly cases_yellow: number;
  readonly cases_brown: number;
  readonly cases_indigenous: number;
  readonly cases_undefined_race: number;
  readonly percent_female: number;
  readonly percent_male: number;
  readonly percent_sp: number;
  readonly percent_white: number;
  readonly percent_black: number;
  readonly percent_yellow: number;
  readonly percent_brown: number;
  readonly percent_indigenous: number;
}
