import { Controller, Get, Param, Post } from '@nestjs/common';
import { TrainsSituationService } from '../services/TrainsSituation.service';
import { Cron } from '@nestjs/schedule';
import {
  ITrainSituationJustDesc,
  ITrainsSituation,
} from '../interface/TrainsSituation.interface';

@Controller('api/train')
export class TrainsSituationController {
  constructor(private readonly service: TrainsSituationService) {}

  @Cron('30 * * * * *')
  @Post('')
  async postTrainsStatus(): Promise<void> {
    return await this.service.postTrainsStatus();
  }

  @Get('situations')
  async getTrainsSituations(): Promise<ITrainsSituation[]> {
    console.log('chamou')
    return await this.service.getTrainsSituations();
  }

  @Get('situations/:linha')
  async getTrainSituationWithId(
    @Param('linha') linha: number,
  ): Promise<ITrainSituationJustDesc> {
    console.log(linha)
    return await this.service.getTrainSituationWithId(linha);
  }
}
