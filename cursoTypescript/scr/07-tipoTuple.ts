//tipo tuple
// Tuple é um tipo de array com tamanho fixo e tipos específicos para cada posição
const dadosCliente:readonly[number,string]=[1,"Luiz"]; // as const torna o array imutável
//readonly nao deixar modificar o array pelo push, pop, etc
//dadosCliente.pop(); // Erro: pop não é permitido em tuplas imutáveis
console.log(dadosCliente[0]); // 1
console.log(dadosCliente[1]); // "Luiz"
//readonly array
const array:ReadonlyArray<string>=[];
