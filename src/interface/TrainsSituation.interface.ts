export interface ITrainsSituation {
  id: number;
  situacao: string;
  modificado: string;
  criado: string;
  codigo: number;
  linha: number;
  descricao?: string;
}

export interface ITrainSituationJustDesc {
  modificado: string;
  descricao: string;
}

export interface ILines {
  [key: number]: string;
}
