import {
  Controller,
  Get,
  HttpStatus,
  Res,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
// import * as csv from 'fast-csv';
// import * as fs from 'fs';
// import * as path from 'path';
import { CidService } from './cid.service';

@Controller('cids')
export class CidController {
  constructor(private cidService: CidService) {}

  @Get()
  async index(@Res() res, @Query() query) {
    const result = await this.cidService.getCids(query['full']);

    return res.status(HttpStatus.OK).json({ result });
  }

  @Get(':cid')
  async show(@Res() res, @Param('cid') cidId) {
    const result = await this.cidService.getCid(cidId);

    if (!result) throw new NotFoundException('CID10 não encontrado.');
    return res.status(HttpStatus.OK).json(result);
  }

  // @Post('create')
  // async store(@Res() res) {
  //   fs.createReadStream(
  //     path.resolve(__dirname, '..', '..', 'public', 'cid10.csv'),
  //   )
  //     .pipe(csv.parse({ headers: true, skipRows: 15000, maxRows: 2500 }))
  //     .on('error', (error) => console.error(error))
  //     .on('data', async (row) => {
  //       console.log(row.cid, row.nome);

  //       await this.cidService.createCid({
  //         cid: row.cid,
  //         name: row.nome,
  //       });
  //     });

  //   return res.status(HttpStatus.OK).json({
  //     message: 'CIDs10 importados com sucesso!',
  //   });
  // }
}
