export class Aluno {
    constructor(nome, idade, notas, senha) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
        this.senha = senha;
    }
    apresentar() {
        return `Oi meu nome é ${this.nome} , tenho ${idade} anos e não tenho acesso a minha senha`;
    }
    calcularMedia() {
        return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
    }
}
