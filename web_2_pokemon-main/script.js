const URL_API = 'https://pokeapi.co/api/v2/pokemon/';

const campo = document.getElementById('campo');
const mensagem = document.getElementById('mensagem');
const resultado = document.getElementById('resultado');
const lista = document.getElementById('lista');

async function buscarPokemon() {
  const nome = campo.value.trim().toLowerCase();
  if (nome === '') {
    mensagem.textContent = 'Digite um nome ou número.';
    return;
  }

  mensagem.textContent = 'Carregando...';
  resultado.innerHTML = '';

  try {
    const resposta = await fetch(URL_API + nome);
    if (!resposta.ok) {
      throw new Error('Pokémon não encontrado.');
    }
    const dados = await resposta.json();
    mostrarPokemon(dados);
    mensagem.textContent = '';
  } catch (erro) {
    mensagem.textContent = erro.message;
  }
}

function mostrarPokemon(dados) {
  let tipos = '';
  for (const t of dados.types) {
    tipos += `<span class="tipo">${t.type.name}</span>`;
  }

  resultado.innerHTML = `
    <div class="card">
      <img src="${dados.sprites.front_default}" alt="${dados.name}">
      <h2>#${dados.id} ${dados.name}</h2>
      <div>${tipos}</div>
      <p>Altura: ${dados.height / 10} m · Peso: ${dados.weight / 10} kg</p>
    </div>`;
}

async function carregarLista() {
  const resposta = await fetch(URL_API + '?limit=20');
  const dados = await resposta.json();

  for (const p of dados.results) {
    const botao = document.createElement('button');
    botao.textContent = p.name;
    botao.addEventListener('click', function () {
      campo.value = p.name;
      buscarPokemon();
    });
    lista.appendChild(botao);
  }
}

document.getElementById('btn-buscar').addEventListener('click', buscarPokemon);
campo.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    buscarPokemon();
  }
});

carregarLista();
