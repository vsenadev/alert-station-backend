import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrainsSituation } from '../model/TrainsSituation.model';
import {
  ITrainSituationJustDesc,
  ITrainsSituation,
} from '../interface/TrainsSituation.interface';
import { TrainsSituationModelName } from '../schema/TrainsSituation.schema';
import { format, parseISO } from 'date-fns';

@Injectable()
export class TrainsSituationRepository {
  private readonly lines = {
    1: 'Azul',
    2: 'Verde',
    3: 'Vermelha',
    4: 'Amarela',
    5: 'Lilás',
    7: 'Rubi',
    8: 'Diamante',
    9: 'Esmeralda',
    10: 'Turquesa',
    11: 'Coral',
    12: 'Safira',
    13: 'Jade',
    15: 'Prata',
    17: 'Ouro',
  };
  private readonly colors = {
    1: '#00378C',
    2: '#186D55',
    3: '#F51200',
    4: '#EFBA00',
    5: '#9271B1',
    7: '#C80857',
    8: '#949488',
    9: '#219896',
    10: '#1B85A5',
    11: '#F46C55',
    12: '#1F2086',
    13: '#29B352',
    15: '#848D90',
    17: 'rgb(255, 215, 0)',
  };

  constructor(
    @InjectModel(TrainsSituationModelName)
    private readonly trainsSituationModel: Model<TrainsSituation>,
  ) {}

  async postTrainsStatus(trainsSituation: ITrainsSituation[]): Promise<void> {
    for (const element of trainsSituation) {
      const filter = { codigo: element.codigo };
      const update = {
        $set: {
          codigo: element.codigo,
          cor: this.colors[element.codigo],
          nome: this.lines[element.codigo],
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

  async getTrainsSituations(): Promise<ITrainsSituation[]> {
    return this.trainsSituationModel.find(
      {},
      { __v: 0, criado: 0, descricao: 0, modificado: 0 },
    );
  }

  async getTrainSituationWithId(
    linha: number,
  ): Promise<ITrainSituationJustDesc> {
    return this.trainsSituationModel.findOne(
      { codigo: linha },
      {
        criado: 0,
        __v: 0,
        _id: 0,
        id: 0,
        codigo: 0,
        situacao: 0,
        nome: 0,
        cor: 0,
      },
    );
  }
}
