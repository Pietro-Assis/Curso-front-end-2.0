const btnTema = document.getElementById("btnTema");
const campoIdeia = document.getElementById("campoIdeia");
const btnAdicionar = document.getElementById("botaoAdicionar");
let texto = campoIdeia.value;

function alternarTema() {
    document.body.classList.toggle("tema-escuro");
    const escuro = document.body.classList.contains("tema-escuro");
    btnTema.textContent = escuro ? " Tema claro" : " Tema escuro";
}

function criarCard () {
    const card = document.createElement("article");
    const titulo = document.createElement("p");
    card.classList.add("card");
    titulo.textContent = texto;
    card.appendChild(titulo)
    btnRemover.addEventListener('click', function (){RemoverCard(card);})

    return card
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

function adicionarCard () {
    const texto = campoIdeia.value.trim();
    if (!validarTexto(texto)) return;
    const card = criarCard(texto);
    Mural.appendChild(card);
    campoIdeia.value = "";
    campoIdeia.focus();
}
function RemoverCard (card){
    card.remove();
    atualizarContador();
}
function atualizarContador(){atualizarContador.textContent.children.length;}


btnTema.addEventListener("click", alternarTema);
btnAdicionar.addEventListener("click", adicionarCard);

const acoes = document.createElement("div");
const btnCurtir = document.createElement("button");
const btnRemover = document.createElement("button");

acoes.classList.add("acoes");
btnCurtir.textContent = "curtir";
btnRemover.textContent = "Remover";

btnCurtir.addEventListener("click", function(){card.classList.toggle("curtido");const curtido = card.classList.contains("curtido");btnCurtir.textContent= curtido ? "curtido" : "curtir";});