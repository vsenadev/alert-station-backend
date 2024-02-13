import { Controller, Get } from '@nestjs/common';
import { MeteorologyService } from '../services/Meteorology.service';
import { IMetereology } from '../interface/Meteorology.interface';

@Controller('api/meteorology')
export class MeteorologyController {
  constructor(private readonly service: MeteorologyService) {}

  @Get('')
  async getTrainsSituations(): Promise<IMetereology> {
    return await this.service.getTemperature();
  }
}
