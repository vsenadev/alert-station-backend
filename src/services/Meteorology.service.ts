import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { IMetereology } from '../interface/Meteorology.interface';

@Injectable()
export class MeteorologyService {
  constructor() {}

  async getTemperature(): Promise<IMetereology> {
    try {
      let response: IMetereology = {
        condicao: '',
        min: 0,
        max: 0,
      };

      await axios
        .get('https://brasilapi.com.br/api/cptec/v1/clima/previsao/244')
        .then((res) => {
          response = {
            condicao: res.data.clima[0].condicao,
            min: res.data.clima[0].min,
            max: res.data.clima[0].max,
          };
        });

      return response;
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
