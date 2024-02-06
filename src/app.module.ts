import { Module } from '@nestjs/common';
import { TrainsSituationModule } from './modules/TrainsSituation.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, TrainsSituationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
