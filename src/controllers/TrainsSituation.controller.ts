import { Controller, HttpException, Post } from "@nestjs/common";
import { TrainsSituationService } from '../services/TrainsSituation.service';
import { Cron } from "@nestjs/schedule";

@Controller('api/train')
export class TrainsSituationController {
  constructor(private readonly service: TrainsSituationService) {}

  @Cron('59 * * * * *')
  @Post('')
  async postTrainsStatus() {
    await this.service.postTrainsStatus();
  }
}
