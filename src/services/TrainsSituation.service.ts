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

      return await this.repository.postTrainsStatus(trainsSituation);
    } catch (error) {
      throw new HttpException(
        {
          message: 'Por favor! Verificar cronjob',
        },
        500,
      );
    }
  }

  async getTrainsSituations() {
    try {
      return await this.repository.getTrainsSituations();
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro!' + error,
        },
        500,
      );
    }
  }

  async getTrainSituationWithId(linha: number) {
    try {
      return await this.repository.getTrainSituationWithId(linha);
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro!' + error,
        },
        500,
      );
    }
  }
}
