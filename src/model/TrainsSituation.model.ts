import { Document } from 'mongoose';

export interface TrainsSituation extends Document {
  id: number;
  situacao: string;
  modificado: string;
  criado: string;
  codigo: number;
  linha: number;
  cor: string;
  nome: string;
  descricao?: string;
}
