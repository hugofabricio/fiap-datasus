import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { QueryOptions } from '../config/query-options.config';
import { Cid } from './interfaces/cid.interface';
import { CreateCidDTO } from './dto/cid.dto';

@Injectable()
export class CidService {
  constructor(@InjectModel('Cid') private readonly cidModel: Model<Cid>) {}

  async getCids(options: QueryOptions): Promise<Cid[]> {
    if (!options.limit || options?.limit > 100) {
      options.limit = 10;
    }

    if (options.fields) {
      const cids = await this.cidModel
        .find(
          { [options.fields]: { $regex: `.*${options.text}.*` } },
          (err, doc) => {
            return doc;
          },
        )
        .populate('statistics')
        .skip(Number(options.offset))
        .limit(Number(options.limit))
        .exec();

      return cids;
    } else {
      const cids = await this.cidModel
        .find()
        .populate('statistics')
        .skip(Number(options.offset))
        .limit(Number(options.limit))
        .exec();

      return cids;
    }
  }

  async getCid(cidId: string): Promise<Cid> {
    const cid = await this.cidModel
      .findOne({ cid: cidId.toUpperCase() })
      .populate('statistics')
      .exec();

    return cid;
  }

  async createCid(createCidDTO: CreateCidDTO): Promise<Cid> {
    const cid = await new this.cidModel(createCidDTO);
    return await cid.save();
  }
}
