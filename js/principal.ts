let nome: string = "Rubem Oliota";
let idade: number = 33;

console.log(nome, idade);

$("<p>", {
  text: `Oi ${nome} vc tem ${idade} anos`,
}).appendTo("body");

function teste(): number {
  return 0;
}

function dados(nome: string, idade: number): boolean {
  if (nome == "Rubem" && idade == 33) {
    return true;
  } else {
    return false;
  }
}
 

console.log("A soma deu",somar(1,5));
