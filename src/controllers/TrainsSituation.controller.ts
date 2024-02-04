import { Controller, Get, Param, Post } from "@nestjs/common";
import { TrainsSituationService } from '../services/TrainsSituation.service';
import { Cron } from '@nestjs/schedule';
import { ITrainsSituation } from "../interface/TrainsSituation.interface";

@Controller('api/train')
export class TrainsSituationController {
  constructor(private readonly service: TrainsSituationService) {}

  @Cron('10 * * * * *')
  @Post('')
  async postTrainsStatus() {
    return await this.service.postTrainsStatus();
  }

  @Get('situations')
  async getTrainsSituations(): Promise<ITrainsSituation[]> {
    return await this.service.getTrainsSituations();
  }

  @Get('situations/:linha')
  async getTrainSituationWithId(@Param('linha') linha: number) {
    return await this.service.getTrainSituationWithId(linha);
  }
}
