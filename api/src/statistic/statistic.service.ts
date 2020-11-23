import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { QueryOptions } from '../config/query-options.config';
import { Statistic } from './interfaces/statistic.interface';

@Injectable()
export class StatisticService {
  constructor(
    @InjectModel('Statistic') private readonly statisticModel: Model<Statistic>,
  ) {}

  async getStatistics(
    cidId: string,
    options: QueryOptions,
  ): Promise<Statistic[]> {
    if (!options.limit || options?.limit > 100) {
      options.limit = 10;
    }

    if (options.fields) {
      const statistics = await this.statisticModel
        .find(
          {
            cid: cidId.toUpperCase(),
            [options.fields]: { $regex: `.*${options.text}.*` },
          },
          (err, doc) => {
            return doc;
          },
        )
        .sort({ year: -1 })
        .populate({ path: 'disease', select: 'name' })
        .skip(Number(options.offset))
        .limit(Number(options.limit))
        .exec();

      return statistics;
    } else {
      const statistics = await this.statisticModel
        .find({ cid: cidId.toUpperCase() })
        .sort({ year: -1 })
        .populate({ path: 'disease', select: 'name' })
        .skip(Number(options.offset))
        .limit(Number(options.limit))
        .exec();

      return statistics;
    }
  }

  async getStatistic(cidId: string, year: string): Promise<Statistic> {
    const statistic = await this.statisticModel
      .findOne({ cid: cidId.toUpperCase(), year })
      .sort({ year: -1 })
      .populate({ path: 'disease', select: 'name' })
      .exec();

    return statistic;
  }

  async createStatistic(createStatisticDTO): Promise<Statistic> {
    const statistic = await new this.statisticModel(createStatisticDTO);
    return await statistic.save();
  }
}
