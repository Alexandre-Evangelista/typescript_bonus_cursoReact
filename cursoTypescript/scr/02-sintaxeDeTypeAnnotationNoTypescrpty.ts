let nome:string="luiz";
let idade:number=30;
let ativo:boolean=true;
let simbolo:symbol=Symbol("qualquer simbolo");
//let big:bigint=10n;
let arrayOfNumbers:Array<number>=[1,2,3,4,5];
let arrayOfNumbers2:number[]=[1,2,3,4,5];
arrayOfNumbers.push(6);
let arrayOfStrings:Array<string>=["a","b","c"];
let arrayOfStrings2:string[]=["a","b","c"];
let pessoa:{nome:string, idade:number, ativo?:boolean}={
  nome: "Luiz",idade: 30}
//? usa para indicar que o campo é opcional
console.log(pessoa.nome);
console.log(pessoa.idade);