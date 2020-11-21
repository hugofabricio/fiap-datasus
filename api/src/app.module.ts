import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { config } from './config';
import { MongooseConfigService } from './mongoose.config';

import { AppController } from './app.controller';
import { CidModule } from './cid/cid.module';
import { StatisticModule } from './statistic/statistic.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
    }),
    CidModule,
    StatisticModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
