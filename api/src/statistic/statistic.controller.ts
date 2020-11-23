import {
  Controller,
  Get,
  HttpStatus,
  Res,
  Req,
  Param,
  // Post,
  NotFoundException,
} from '@nestjs/common';

import { StatisticService } from './statistic.service';
// import { CidService } from '../cid/cid.service';
// import * as csv from 'fast-csv';
// import * as fs from 'fs';
// import * as path from 'path';

@Controller('statistics')
export class StatisticController {
  constructor(
    private statisticService: StatisticService, // private cidService: CidService,
  ) {}

  @Get(':cid')
  async index(@Res() res, @Param('cid') cidId, @Req() req) {
    const results = await this.statisticService.getStatistics(cidId, req.query);

    return res.status(HttpStatus.OK).json({ results });
  }

  @Get(':cid/:year')
  async show(@Res() res, @Param('cid') cidId, @Param('year') year) {
    const result = await this.statisticService.getStatistic(cidId, year);

    if (!result) throw new NotFoundException('CID10 não encontrado.');

    return res.status(HttpStatus.OK).json(result);
  }

  // @Post('create')
  // async store(@Res() res) {
  //   const parseValue = (value) => {
  //     if (value === 'NA') {
  //       return null;
  //     } else {
  //       return parseFloat(value).toFixed(2);
  //     }
  //   };

  //   const parseNA = (value) => {
  //     if (value === 'NA') {
  //       return null;
  //     }

  //     return value;
  //   };

  //   const parsePercent = (value) => {
  //     if (value === 'NA') {
  //       return null;
  //     }

  //     value = parseValue(value);

  //     return Math.floor(value * 100);
  //   };

  //   fs.createReadStream(
  //     path.resolve(__dirname, '..', '..', 'public', 'dataset.csv'),
  //   )
  //     .pipe(csv.parse({ headers: true, skipRows: 30000, maxRows: 10000 }))
  //     .on('error', (error) => console.error(error))
  //     .on('data', async (row) => {
  //       const cid = await this.cidService.getCid(row.cid);

  //       if (cid) {
  //         console.log(cid.cid, cid.name);

  //         const result = await this.statisticService.createStatistic({
  //           cid: row.cid,
  //           year: row.year,
  //           cost_year: parseValue(row.cost_year),
  //           cost_per_case: parseValue(row.cost_per_case),
  //           age: Math.floor(parseFloat(row.age)).toFixed().substring(0, 2),
  //           mortality: parseNA(row.mortality),
  //           mortality_rate: Math.floor(
  //             parseFloat(row.mortality_rate),
  //           ).toFixed(),
  //           days_hospitalized: parseNA(row.days_hospitalized),
  //           cases: parseNA(row.cases),
  //           cases_female: parseNA(row.cases_female),
  //           cases_male: parseNA(row.cases_male),
  //           cases_sp: parseNA(row.cases_sp),
  //           cases_undefined_gender: parseNA(row.cases_undefined_gender),
  //           cases_white: parseNA(row.cases_white),
  //           cases_black: parseNA(row.cases_black),
  //           cases_yellow: parseNA(row.cases_yellow),
  //           cases_brown: parseNA(row.cases_brown),
  //           cases_indigenous: parseNA(row.cases_indigenous),
  //           cases_undefined_race: parseNA(row.cases_undefined_race),
  //           percent_female: parsePercent(row.percent_female),
  //           percent_male: parsePercent(row.percent_male),
  //           percent_sp: parsePercent(row.percent_sp),
  //           percent_white: parsePercent(row.percent_white),
  //           percent_black: parsePercent(row.percent_black),
  //           percent_yellow: parsePercent(row.percent_yellow),
  //           percent_brown: parsePercent(row.percent_brown),
  //           percent_indigenous: parsePercent(row.percent_indigenous),
  //           disease: cid._id,
  //         });

  //         await cid.statistics.push(result);
  //         await cid.save();
  //       }
  //     });

  //   return res.status(HttpStatus.OK).json({
  //     message: 'Estatísticas importadas com sucesso!',
  //   });
  // }
}
