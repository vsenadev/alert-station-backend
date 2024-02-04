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

  async postTrainsStatus(trainsSituation: ITrainsSituation[]) {
    for (const element of trainsSituation) {
      const filter = { codigo: element.codigo };
      const update = {
        $set: {
          codigo: element.codigo,
          id: element.id,
          situacao: element.situacao,
          descricao: element.descricao,
          criado: format(parseISO(element.criado), 'dd/MM/yyyy HH:mm:ss'),
          modificado: format(
            parseISO(element.modificado),
            'dd/MM/yyyy HH:mm:ss',
          ),
        },
      };
      const options = {
        upsert: true,
      };

      await this.trainsSituationModel.updateOne(filter, update, options);
    }
  }

  async getTrainsSituations() {
    return this.trainsSituationModel.find(
      {},
      { __v: 0, criado: 0, descricao: 0, modificado: 0 },
    );
  }

  async getTrainSituationWithId(linha: number) {
    return this.trainsSituationModel.findOne(
      { codigo: linha },
      { criado: 0, __v: 0, _id: 0, codigo: 0, situacao: 0 },
    );
  }
}
