import { Injectable } from '@nestjs/common';
import { TrainsSituationRepository } from '../repositories/TrainsSituation.repository';

@Injectable()
export class TrainsSituationService {
  constructor(private readonly repository: TrainsSituationRepository) {}
}
