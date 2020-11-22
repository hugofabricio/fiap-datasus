import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Cid } from './interfaces/cid.interface';
import { CreateCidDTO } from './dto/cid.dto';

@Injectable()
export class CidService {
  constructor(@InjectModel('Cid') private readonly cidModel: Model<Cid>) {}

  async getCids(full: string): Promise<Cid[]> {
    let cids: Cid[];

    if (full) {
      cids = await this.cidModel.find().populate('statistics').exec();
    } else {
      cids = await this.cidModel.find();
    }

    return cids;
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
