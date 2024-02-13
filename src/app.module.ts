import { Module } from '@nestjs/common';
import { TrainsSituationModule } from './modules/TrainsSituation.module';
import { DatabaseModule } from './database/database.module';
import { MeteorologyModule } from './modules/Meteorology.module';

@Module({
  imports: [DatabaseModule, TrainsSituationModule, MeteorologyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
