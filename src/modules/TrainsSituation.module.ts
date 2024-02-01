import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainsSituationController } from '../controllers/TrainsSituation.controller';
import { TrainsSituationService } from '../services/TrainsSituation.service';
import {
  DiagramModelName,
  TrainsSituationSchema,
} from '../schema/TrainsSituation.schema';
import { TrainsSituationRepository } from '../repositories/TrainsSituation.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DiagramModelName, schema: TrainsSituationSchema },
    ]),
  ],
  controllers: [TrainsSituationController],
  providers: [TrainsSituationService, TrainsSituationRepository],
})
export class TrainsSituationModule {}
