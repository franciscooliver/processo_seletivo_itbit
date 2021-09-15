import { Sexo } from './Sexo';

export interface Usuario {
  nome: string;
  dataNascimento: string;
  email: string;
  senha: string;
  ativo: string;
  sexo: Sexo;
}
