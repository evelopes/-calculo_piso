let metro;
let peca;
let total;

function entrada() {
    let largura = document.getElementById("largura").value;
    let comprimento = document.getElementById("comprimento").value;
    let piso1 = document.getElementById("peca1").value;
    let piso2 = document.getElementById("peca2").value;

    metro = metroQuadrado(largura, comprimento);
    peca = metroQuadrado(piso1, piso2);
    total = Math.ceil((metro / peca) * 1.1);

    document.getElementById("resultadoPecas").textContent = total + " peças";
    document.getElementById("resultadoMetro").textContent = metro + " metros quadrados";
    document.getElementById("mostrar").style.display = "block";
}

function metroQuadrado(largura, comprimento) {
    return largura * comprimento;
}
