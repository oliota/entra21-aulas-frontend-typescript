$("button").on("click", (button) => {
    let id = button.currentTarget.id;
    let numeroA = Number($("#numeroA").val());
    let numeroB = Number($("#numeroB").val());
    let resultado;
    switch (id) {
        case "somar":
            resultado = somar(numeroA, numeroB);
            break;
        case "subtrair":
            resultado = subtrair(numeroA, numeroB);
            break;
        case "multiplicar":
            resultado = multiplicar(numeroA, numeroB);
            break;
        case "dividir":
            resultado = dividir(numeroA, numeroB);
            break;
    }
    console.log("Resultado:", resultado);
});
function somar(numeroA, numeroB) {
    return numeroA + numeroB;
}
function subtrair(numeroA, numeroB) {
    return numeroA - numeroB;
}
function multiplicar(numeroA, numeroB) {
    return numeroA * numeroB;
}
function dividir(numeroA, numeroB) {
    return numeroA / numeroB;
}
