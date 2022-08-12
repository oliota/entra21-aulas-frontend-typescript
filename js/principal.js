let nome = "Rubem Oliota";
let idade = 33;
console.log(nome, idade);
$("<p>", {
    text: `Oi ${nome} vc tem ${idade} anos`,
}).appendTo("body");
function teste() {
    return 0;
}
function dados(nome, idade) {
    if (nome == "Rubem" && idade == 33) {
        return true;
    }
    else {
        return false;
    }
}
console.log("A soma deu", somar(1, 5));
