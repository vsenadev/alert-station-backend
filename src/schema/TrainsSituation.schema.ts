// generate-diagram.schema.ts
import { Schema } from 'mongoose';
import { TrainsSituation } from '../model/TrainsSituation.model';

export const TrainsSituationSchema = new Schema<TrainsSituation>({
  id: { type: Number, required: true },
  situacao: { type: String, required: true },
  modificado: { type: String, required: true },
  criado: { type: String, required: true },
  codigo: { type: Number, required: true },
  linha: { type: Number, required: true },
  descricao: { type: String, required: false },
});

export const TrainsSituationModelName = 'TrainsSituation';
