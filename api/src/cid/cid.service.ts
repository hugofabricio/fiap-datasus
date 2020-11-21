import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Cid } from './interfaces/cid.interface';
import { CreateCidDTO } from './dto/cid.dto';

@Injectable()
export class CidService {
  constructor(@InjectModel('Cid') private readonly cidModel: Model<Cid>) {}

  async getCids(): Promise<Cid[]> {
    const cids = await this.cidModel.find().populate('statistics').exec();
    return cids;
  }

  async getCid(cidId: string): Promise<Cid> {
    const cid = await this.cidModel
      .findOne({ cid: cidId })
      .populate('statistics')
      .exec();

    return cid;
  }

  async createCid(createCidDTO: CreateCidDTO): Promise<Cid> {
    const cid = await new this.cidModel(createCidDTO);
    return await cid.save();
  }
}
