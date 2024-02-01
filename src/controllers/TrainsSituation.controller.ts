import { Controller } from '@nestjs/common';
import { TrainsSituationService } from '../services/TrainsSituation.service';

@Controller('api/train')
export class TrainsSituationController {
  constructor( private readonly service: TrainsSituationService) {}


}
