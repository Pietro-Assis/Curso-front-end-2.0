const campoNumero = document.getElementById("numero");
const botao = document.getElementById("btnDobro");
const saida = document.getElementById("resultado");

botao.addEventListener("click", function () {
    const valorDigitado = campoNumero.value;
    alert("o número é " + valorDigitado);
    const dobro = campoNumero.value *2
    saida.textContent = "Dobro: " + dobro;
} )
// hgdngdd