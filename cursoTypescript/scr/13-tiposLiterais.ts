//usar valores com tipos
let e= 10;
e=0b1010; // binário
const f= 10;
let c: 10 = 10; // c é do tipo literal 10
//const f e um tipo literal pois e uma constante e recebe o valor 10 assim o tipo dele é 10 
// c=20;  Erro: não é possível atribuir um valor diferente de 10
const pessoaLuiz = {
    nome: "Luiz" as const, // "Luiz" é um tipo literal
    sobrenome: "Miranda",
} // pessoaLuiz é do tipo literal { nome: "Luiz", sobrenome: string }

//pessoaLuiz.nome = "João";  Erro: não é possível atribuir um valor diferente de "Luiz"

pessoaLuiz.sobrenome = "Silva"; // pessoaLuiz.sobrenome é do tipo string
console.log(pessoaLuiz.nome);


// as const torna o valor imutável, ou seja, não pode ser alterado
