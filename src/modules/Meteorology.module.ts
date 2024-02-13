import { Module } from '@nestjs/common';
import { MeteorologyController } from '../controllers/Meteorology.controller';
import { MeteorologyService } from '../services/Meteorology.service';

@Module({
  imports: [],
  controllers: [MeteorologyController],
  providers: [MeteorologyService],
})
export class MeteorologyModule {}
