import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Param,
  NotFoundException,
} from '@nestjs/common';
import * as csv from 'fast-csv';
import * as fs from 'fs';
import * as path from 'path';
import { CidService } from './cid.service';

@Controller('cids')
export class CidController {
  constructor(private cidService: CidService) {}

  @Get()
  async index(@Res() res) {
    const result = await this.cidService.getCids();

    return res.status(HttpStatus.OK).json({ result });
  }

  @Get(':cid')
  async show(@Res() res, @Param('cid') cidId) {
    const result = await this.cidService.getCid(cidId);

    if (!result) throw new NotFoundException('CID10 não encontrado.');
    return res.status(HttpStatus.OK).json(result);
  }

  @Post('create')
  async store(@Res() res) {
    fs.createReadStream(
      path.resolve(__dirname, '..', '..', 'public', 'cid10.csv'),
    )
      .pipe(csv.parse({ headers: true }))
      .on('error', (error) => console.error(error))
      .on('data', async (row) => {
        await this.cidService.createCid({
          cid: row.cid,
          name: row.nome,
        });
      });

    return res.status(HttpStatus.OK).json({
      message: 'CIDs10 importados com sucesso!',
    });
  }
}
