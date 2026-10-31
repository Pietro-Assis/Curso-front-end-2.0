// =====================================================
//  CineLista · script.js
//  Hoje você escreve só neste arquivo, uma interação por vez.
//  A ideia da aula: os filmes ficam num VETOR,
//  e a tela é desenhada a partir dele.
// =====================================================


// ---------- PRONTO: funções auxiliares ----------

// estrelas(3)  ->  '★★★☆☆'
function estrelas(nota) {
  let texto = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= nota) {
      texto = texto + '★';
    } else {
      texto = texto + '☆';
    }
  }
  return texto;
}

// mostrarMensagem('Filme adicionado!', 'sucesso')  ou  mostrarMensagem('Digite o título.', 'erro')
function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = 'mensagem ' + tipo;
}

// ---------- PRONTO: elementos da página ----------
const form = document.querySelector('#form-filme');
const inputTitulo = document.querySelector('#titulo');
const selectGenero = document.querySelector('#genero');
const inputAno = document.querySelector('#ano');
const selectNota = document.querySelector('#nota');
const mensagem = document.querySelector('#mensagem');

const lista = document.querySelector('#lista-filmes');
const listaVazia = document.querySelector('#lista-vazia');
const contador = document.querySelector('#contador');
const inputBusca = document.querySelector('#busca');
const filtroGenero = document.querySelector('#filtro-genero');
const filtroStatus = document.querySelector('#filtro-status');
const textoAssistidos = document.querySelector('#total-assistidos');
const textoMedia = document.querySelector('#media');
const btnSortear = document.querySelector('#btn-sortear');
const textoSorteado = document.querySelector('#sorteado');
const btnAdicionar = document.getElementById("btn-adicionar");


// =====================================================
// INTERAÇÃO 1 · MOSTRAR A LISTA QUANDO A PÁGINA ABRE
//   let filmes = [ ... ];
//   function criarCard(filme) { ... }
//   function renderizar() { ... }
// =====================================================
let filmes = [
  {
    id: 1,
    titulo: 'star wars',
    genero: 'acao',
    ano: "galaxia distante, muito tempo atras",
    nota: 0,
    assisti: false,
    info: "um filme onde uns loucos explode planetas"
  },
  {
    id: 2,
    titulo: 'não sei: o filme',
    genero: 'não sei',
    ano: "depois de cristo",
    nota: 10,
    assisti: true,
    info: "Um filme sobre"
  },
  {
    id: 3,
    titulo: 'fim do mundo: tá sem internet',
    genero: 'hacker',
    ano: "antes de cristo",
    nota: 10,
    assisti: false,
    info: "<p>o programador não pode escrever essa parte do código, ele não conseguiu se conectar ao servidor</p>"
  },
  {
    id: 4,
    titulo: 'fim do mundo: tá sem internet 2',
    genero: 'hacker',
    ano: "2027",
    nota: 10,
    assisti: false,
    info: "O programador conectou-se e decidiu hackear a nasa"
  },
  {
    id: 5,
    titulo: 'Matrix',
    genero: 'sei lá, hacker tambem',
    ano: "1999",
    nota: 9,
    assisti: true,
    info: "Um homem foge da matrix"
  }
];

function criarCard(filmes){
  const card = document.createElement("li");
  card.classList.add("filme");

  if (filmes.assisti) {card.classList.add("filme.assistido")};

  const titulo = document.createElement("strong");
  titulo.textContent = filmes.titulo;
  card.appendChild(titulo);

  const desc = document.createElement("span");
  desc.classList.add("filme-info");
  desc.textContent = filmes.info;
  card.appendChild(desc)

  const nota = document.createElement("span");
  nota.textContent = estrelas(filmes.nota);
  card.appendChild(nota);

  const info = document.createElement('span');
  info.textContent = filmes.ano, " . ", filmes.genero;
  card.appendChild(info);

  const botaoAssistir = createElement("button");
  botaoAssistir.type = 'button'
  botaoAssistir.classList.add('btn-assistir')
  if (filmes.assisti){
    botaoAssistir.textContent = "ver denovo"
  }
  else {
    botaoAssistir.textContent = "irei ver";
  }
  botaoAssistir.addEventListener('click',function(){
    alternarAssistido
  })
  card.appendChild(botaoAssistir)

  const btnRemover = document.createElement('button')
  btnRemover.type = 'button'
  btnRemover.classList.add(btn-remover)
  btnRemover.addEventListener('click',function(){
    removerFilme(filmes.id)
  })
  card.appendChild(btnRemover)
  return card;
};

function renderizar(){
  lista.textContent = " ";
  for (let i = 0; i < filmes.lenght; i++){
    lista.appendChild(criarCard(filmes[i]));
  }
  contador.textContent = filmes.length
}

// =====================================================
// INTERAÇÃO 2 · ADICIONAR UM FILME          (evento: submit)
// INTERAÇÃO 3 · AVISAR QUANDO FALTAR ALGO   (dentro do submit)
// =====================================================




// =====================================================
// INTERAÇÃO 4 · MARCAR COMO ASSISTIDO       (evento: click)
//   function alternarAssistido(id) { ... }
// =====================================================
function alternarAssistido(id){
  for (let i=0; i<filmes.lenght; i++){
    if (filmes[i].id ==id){
      filmes[i].assisti = false
      //filmes[i].assisti = !filmes[i].assisti
    }
  }
}


// =====================================================
// INTERAÇÃO 5 · REMOVER UM FILME            (evento: click)
//   function removerFilme(id) { ... }
// =====================================================
function removerFilme(){
  for (let i = 0; i<=filme.lenght; i++){
    if(filme[i].id == id){
      filmes.splice(i,1)
      break
    }
  }

}


// =====================================================
// INTERAÇÃO 6 · LEMBRAR A LISTA DEPOIS DO F5
//   function salvar() { ... }
//   function carregar() { ... }
// =====================================================
const CHAVES = 'cinelista'
function salva(){
  localStorage.setItem(CHAVES, JSON.stringify(filmes))
}
function carregar(){
  const texto = localStorage.getItem(CHAVES)
  if(texto != null){
    filmes=json.parse(texto)
  }
}

// =====================================================
// INTERAÇÃO 7 · BUSCAR ENQUANTO DIGITA       (evento: input)
// INTERAÇÃO 8 · FILTRAR POR GÊNERO E STATUS  (evento: change)
//   function deveAparecer(filme) { ... }   responde true ou false
// =====================================================



// =====================================================
// EXTENSÃO · RESUMO DA LISTA
// =====================================================



// =====================================================
// DESAFIO · SORTEAR UM FILME PARA HOJE      (evento: click)
// =====================================================



// ---------- QUANDO A PÁGINA ABRE ----------

renderizar();