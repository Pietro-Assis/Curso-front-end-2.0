const botao = document.getElementById("botao")
const botao2 = document.getElementById("botao2")
const titulo = document.getElementById("titulo")
const p = document.getElementById("p")
function mudarTemaEscuro (){
    document.body.style.backgroundColor = "#000000ff"
    titulo.style.color = "#ff0000ff"
    document.body.stye.color = "#ffffffff"

}
function mudarTemaClaro ()
{
    document.body.style.backgroundColor = "#e7e1e1de"
    titulo.style.color = "#000000ff"
}
botao.addEventListener("click", mudarTemaEscuro)
botao2.addEventListener("click", mudarTemaClaro)