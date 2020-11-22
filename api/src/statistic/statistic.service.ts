import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Statistic } from './interfaces/statistic.interface';

@Injectable()
export class StatisticService {
  constructor(
    @InjectModel('Statistic') private readonly statisticModel: Model<Statistic>,
  ) {}

  async getStatistics(): Promise<Statistic[]> {
    const statistics = await this.statisticModel
      .find()
      .populate('disease')
      .exec();
    return statistics;
  }

  async getStatistic(cidId: string, year: string): Promise<Statistic> {
    const statistic = await this.statisticModel
      .findOne({ cid: cidId.toUpperCase(), year })
      .populate('disease')
      .exec();
    return statistic;
  }

  async createStatistic(createStatisticDTO): Promise<Statistic> {
    const statistic = await new this.statisticModel(createStatisticDTO);
    return await statistic.save();
  }
}
