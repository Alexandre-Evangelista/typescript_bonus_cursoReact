//Array<T>[T] generics
// Array<T> é um tipo genérico que pode ser usado para criar arrays de qualquer tipo
function multiplicarArgs(...args: number[]): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}
let conta=multiplicarArgs(1, 2, 3, 4, 5); // 120
console.log(conta);
function concatenaStrings(...args:Array<string>): string {
  return args.reduce((acc,valor)=>
  acc + valor, "");
}
function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}
console.log(concatenaStrings("Olá, ", "TypeScript", "!"));
console.log(toUpperCase("Olá, ", "TypeScript", "!"));