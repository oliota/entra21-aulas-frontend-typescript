export class Aluno {
  public nome: string;
  public idade: number;
  public notas: Array<number>;
  private senha: string;

  constructor(
    nome: string,
    idade: number,
    notas: Array<number>,
    senha: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.notas = notas;
    this.senha = senha;
  }

  apresentar(): string {
    return `Oi meu nome é ${this.nome} , tenho ${idade} anos e não tenho acesso a minha senha`;
  }

  calcularMedia(): number {
    return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
  }
}
