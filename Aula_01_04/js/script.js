const anoDeNascimento = document.getElementById("anoDeNascimento");
const botao = document.getElementById("botao")
const saida = document.getElementById("saida")
botao.addEventListener("click", function(){
    if (anoDeNascimento.value === "") {
        anoDeNascimento.focus
        saida.textContent = "Insira um valor válido!"
        return
    }
    else {
        const Idade = 2026-anoDeNascimento.value;
        saida.textContent = Idade;
    }
})