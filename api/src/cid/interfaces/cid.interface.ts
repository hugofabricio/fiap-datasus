import { Document } from 'mongoose';
import { Statistic } from '../../statistic/interfaces/statistic.interface';

export interface Cid extends Document {
  readonly cid: string;
  readonly name: string;
  readonly statistics: Statistic[];
}
