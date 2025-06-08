export class Colaborador {
    public readonly name: string;
    public readonly cargo: string;
    private readonly salario: number;

    constructor(name: string, cargo: string, salario: number) {
        this.name = name;
        this.cargo = cargo;
        this.salario = salario;
    }

    public getSalario(): number {
        return this.salario;
    }
}
export class Empresa{
    public readonly name: string;
    private cnpj: string;
    private readonly colaboradores: Colaborador[] = [];


    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }
    public addColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }
    public listarColaboradores(): Colaborador[] {
        return this.colaboradores;
    }
}
const empresa1 = new Empresa("Udemy", "12.345.678/0001-90");
console.log(empresa1);
console.log(empresa1.name);
const colaborador1 = new Colaborador("Luiz", "Desenvolvedor", 5000);
console.log(colaborador1);
empresa1.addColaborador(colaborador1);
const colaborador2 = new Colaborador("Maria", "Gerente", 7000);
empresa1.listarColaboradores().forEach((colaborador) => {
    console.log(`Colaborador: ${colaborador.name}, Cargo: ${colaborador.cargo}, Salário: ${colaborador.getSalario()}`);
});

export class Empresa2{

    constructor(public readonly name: string, public readonly cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

}
const empresa2 = new Empresa2("Udemy", "12.345.678/0001-90");
console.log(empresa2);