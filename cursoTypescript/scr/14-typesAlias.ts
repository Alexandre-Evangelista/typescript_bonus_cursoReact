type PropPerson = {
  name: string,
  age?: number,
  corPreferida?:string,
  salario?: number,
}
type Idade= number;
const pessoa1: PropPerson = {
  name: "Luiz",
    age: 30,
    corPreferida: "Azul",
    salario: 1000,
};
console.log(pessoa1.name); // Luiz