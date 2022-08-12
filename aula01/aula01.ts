$("button").on("click", (button) => {
  let id: string = button.currentTarget.id;

  let numeroA: number = Number($("#numeroA").val());
  let numeroB: number = Number($("#numeroB").val());

  let resultado: number;
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
  console.log("Resultado:",resultado);
  
});


function somar(numeroA: number, numeroB: number): number {
   return numeroA+numeroB;
}
function subtrair(numeroA: number, numeroB: number): number {
    return numeroA-numeroB;
}

function multiplicar(numeroA: number, numeroB: number): number {
    return numeroA*numeroB;
}

function dividir(numeroA: number, numeroB: number): number {
    return numeroA/numeroB;
}

