const campoNumero1 = document.getElementById("numero1")
const campoNumero2 = document.getElementById("numero2")
const btnSoma = document.getElementById("btnSoma")
const resultado = document.getElementById("resultado")
btnSoma.addEventListener("click", function() {
    const campoNumero1Convertido = Number(campoNumero1.value);
    const campoNumero2Convertido = Number(campoNumero2.value);
    const soma = campoNumero2Convertido+campoNumero1Convertido;
    resultado.innerText = soma
})