import { HttpException, Injectable } from '@nestjs/common';
import { TrainsSituationRepository } from '../repositories/TrainsSituation.repository';
import axios from 'axios';
import { ITrainSituationJustDesc, ITrainsSituation } from "../interface/TrainsSituation.interface";

@Injectable()
export class TrainsSituationService {
  constructor(private readonly repository: TrainsSituationRepository) {}

  async postTrainsStatus(): Promise<void> {
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

  async getTrainsSituations(): Promise<ITrainsSituation[]> {
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

  async getTrainSituationWithId(linha: number): Promise<ITrainSituationJustDesc> {
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
