//never nunca vai retornar nada ex laço infinito e erros

function criaErro(): never {
    throw new Error("Erro inesperado!");
}