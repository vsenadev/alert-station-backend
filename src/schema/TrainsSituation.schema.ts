// generate-diagram.schema.ts
import { Schema } from 'mongoose';
import { TrainsSituation } from '../Model/TrainsSituation.model';

export const TrainsSituationSchema = new Schema<TrainsSituation>({});

export const DiagramModelName = 'TrainsSituation';
