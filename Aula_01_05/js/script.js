const idade = document.getElementById("idade")
const botao = document.getElementById("botao")
const saida = document.getElementById("saida")
botao.addEventListener("click",function(){
    if (idade.value < 18) {
        saida.textContent = "acesso negado"
        return
    }
    else {
        saida.textContent = "acesso liberado"
    }
})