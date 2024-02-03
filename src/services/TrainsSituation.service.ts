import { HttpException, Injectable } from '@nestjs/common';
import { TrainsSituationRepository } from '../repositories/TrainsSituation.repository';
import axios from 'axios';
import { ITrainsSituation } from '../interface/TrainsSituation.interface';

@Injectable()
export class TrainsSituationService {
  constructor(private readonly repository: TrainsSituationRepository) {}

  async postTrainsStatus() {
    try {
      let trainsSituation: ITrainsSituation[] = [];

      await axios('https://www.diretodostrens.com.br/api/status').then(
        (res) => {
          trainsSituation = res.data;
        },
      );

      await this.repository.postTrainsStatus(trainsSituation);
    } catch (error) {
      throw new HttpException(
        {
          message: 'Por favor! Verificar cronjob',
        },
        500,
      );
    }
  }
}
