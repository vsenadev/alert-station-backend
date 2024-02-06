import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/Database.module';
import { TrainsSituationModule } from './modules/TrainsSituation.module';

@Module({
  imports: [DatabaseModule, TrainsSituationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
