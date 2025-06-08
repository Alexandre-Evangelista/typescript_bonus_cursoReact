export interface Profissao{
    profissao?: string;
};
export interface PessoaComIdade{
    idade?: number;
};

export class Pessoa implements PessoaComIdade,Profissao {
    
    constructor(
        public nome: string,
        public profissao: string,
        public idade: number
    ) {
        this.nome = nome;
        this.profissao = profissao;
        this.idade = idade;
    }

    public apresentar(): string {
        return `Olá, meu nome é ${this.nome} e minha profissão é ${this.profissao ?? 'não informada'}.`;
    }
}
const pessoa:Pessoa = new Pessoa("João", "Desenvolvedor", 30);
console.log(pessoa.apresentar()); // Olá, meu nome é João e minha profissão é Desenvolvedor.