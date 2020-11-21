import { Module } from '@nestjs/common';
import { CidController } from './cid.controller';
import { CidService } from './cid.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CidSchema } from './schemas/cid.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cid', schema: CidSchema }])],
  controllers: [CidController],
  providers: [CidService],
  exports: [CidService],
})
export class CidModule {}
