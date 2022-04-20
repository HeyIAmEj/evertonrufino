export interface Imodels {
  id:number;
  nome:string;
  descricao?:string;

  data_inicio?:Date;
  data_termino?:Date;
  estado:string; // finalizado, andamento, atualizações

  isPublico:boolean;
  isPessoal:boolean;

  link?:string;
  linguagem:string[];

}
