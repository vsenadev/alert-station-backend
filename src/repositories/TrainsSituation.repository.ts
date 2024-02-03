import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrainsSituation } from '../model/TrainsSituation.model';
import { ITrainsSituation } from '../interface/TrainsSituation.interface';
import { TrainsSituationModelName } from '../schema/TrainsSituation.schema';
import { format, parseISO } from 'date-fns';

@Injectable()
export class TrainsSituationRepository {
  constructor(
    @InjectModel(TrainsSituationModelName)
    private readonly trainsSituationModel: Model<TrainsSituation>,
  ) {}

  async postTrainsStatus(trainsSituation: ITrainsSituation[]){
    for (const element of trainsSituation) {
      const filter = { codigo: element.codigo };
      const update = {
        $set: {
          situacao: element.situacao,
          modificado: format(parseISO(element.criado), 'dd/MM/yyyy HH:mm:ss'),
          criado: format(parseISO(element.criado), 'dd/MM/yyyy HH:mm:ss'),
          codigo: element.codigo,
          descricao: element.descricao,
        },
      };
      const options = {
        upsert: true,
      };

      await this.trainsSituationModel.updateOne(filter, update, options);
    }
  }
}
