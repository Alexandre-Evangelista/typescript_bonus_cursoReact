// undefiend a linguagem usar pra falar que nao foi definido o valor de uma variavel
//null usa para falar que a variavel foi definida, mas nao tem valor
// null é um tipo que representa a ausência intencional de valor
let x;
if (typeof x === 'undefined') x=20;
console.log(x*2); // 20

function createPerson(name: string, age: number, active?: boolean): { name: string; age: number; active?: boolean } {
    return { name, age, active };
}

console.log(createPerson("Luiz", 30, true)); // { name: "Luiz", age: 30, active: true }