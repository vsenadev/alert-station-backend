import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainsSituationController } from '../controllers/TrainsSituation.controller';
import { TrainsSituationService } from '../services/TrainsSituation.service';
import {
  TrainsSituationModelName,
  TrainsSituationSchema,
} from '../schema/TrainsSituation.schema';
import { TrainsSituationRepository } from '../repositories/TrainsSituation.repository';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TrainsSituationModelName, schema: TrainsSituationSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [TrainsSituationController],
  providers: [TrainsSituationService, TrainsSituationRepository],
})
export class TrainsSituationModule {}
