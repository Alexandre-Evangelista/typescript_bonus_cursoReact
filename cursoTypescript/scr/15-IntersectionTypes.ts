// | ou
// & e
type TemNome = {
  nome: string;
};
type TemSobrenome = {
  sobrenome: string;
};
type TemIdade = {
  idade: number;
};	
type Pessoa = TemNome & TemSobrenome & TemIdade;
const pessoa10: Pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
};
type AB="A"|"B";
type AC="C"|"A";
type Intersecao = AB & AC; 
