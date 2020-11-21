import { Module } from '@nestjs/common';
import { StatisticController } from './statistic.controller';
import { StatisticService } from './statistic.service';
import { CidModule } from '../cid/cid.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StatisticSchema } from './schemas/statistic.schema';

@Module({
  imports: [
    CidModule,
    MongooseModule.forFeature([{ name: 'Statistic', schema: StatisticSchema }]),
  ],
  controllers: [StatisticController],
  providers: [StatisticService],
})
export class StatisticModule {}
