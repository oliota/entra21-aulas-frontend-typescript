import { Aluno } from './Aluno.js';
let aluno1 = new Aluno("Rubem", 33, [7, 7, 10], "123");
console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.notas);
console.log(aluno1.calcularMedia());
