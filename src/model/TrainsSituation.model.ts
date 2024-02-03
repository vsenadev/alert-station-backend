import { Document } from 'mongoose';

export interface TrainsSituation extends Document {
  situacao: string;
  modificado: string;
  criado: string;
  codigo: number;
  linha: number;
  descricao?: string;
}
