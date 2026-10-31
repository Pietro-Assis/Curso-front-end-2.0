const btnTema = document.getElementById("btnTema");
const campoIdeia = document.getElementById("campoIdeia");
let texto = campoIdeia.value
const btnAdicionar = document.getElementById("btnAdicionar")
 
 
 
 
 
function alternarTema() {
    document.body.classList.toggle("tema-escuro");
    const escuro = document.body.classList.contains("tema-escuro");
    btnTema.textContent = escuro ? " Tema claro" : " Tema escuro";
}
 
function validarTexto(texto) {
    if (texto.trim() === "") {
        mensagem.textContent = "Digite uma ideia antes de adicionar.";
        campoIdeia.focus();
        return false;
    }
    mensagem.textContent = "";
    return true;
}
 
function atualizarContador() {
    contador.textContent = mural.children.length;
}
 
function removerCard(card) {
    card.remove();
    atualizarContador();
}
 
function criarCard(texto) {
    const card = document.createElement("article");
    const titulo = document.createElement("p");
    const acoes = document.createElement("div");
    const btnCurtir = document.createElement("button");
    const btnRemover = document.createElement("button");
 
    card.classList.add("card");
    acoes.classList.add("acoes");
    titulo.textContent = texto;
    btnCurtir.textContent = " Curtir";
    btnRemover.textContent = "Remover";
 
    btnCurtir.addEventListener("click", function () {
        card.classList.toggle("curtido");
        const curtido = card.classList.contains("curtido");
        btnCurtir.textContent = curtido ? " Curtido" : " Curtir";
    });
 
    btnRemover.addEventListener("click", function () {
        removerCard(card);
    });
 
    acoes.append(btnCurtir, btnRemover);
    card.append(titulo, acoes);
    return card;
}
 
function adicionarCard() {
    const texto = campoIdeia.value.trim();
    if (!validarTexto(texto)) return;
 
    const card = criarCard(texto);
    mural.appendChild(card);
 
    campoIdeia.value = "";
    campoIdeia.focus();
 
}
function removerCard(card) {
    card.remove();
    atualizarContador();
}
 
 
btnTema.addEventListener("click", alternarTema)
btnAdicionar.addEventListener("click", adicionarCard)