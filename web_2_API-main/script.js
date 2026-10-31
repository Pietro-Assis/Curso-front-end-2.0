const consumir = 'https://ghibliapi.vercel.app/films';
const geladeira = document.getElementById('geladeira');
const aviso = document.getElementById('aviso');
const pesquisa = document.getElementById('pesquisa');
const gaveta = document.getElementById('gaveta');
const placar = document.getElementById('placar');
const portao = document.getElementById('portao');
let abacaxi = [];

function corDaNota(xpto) {
if (xpto >= 90) {
return 'nota-alta';
} else if (xpto >= 70) {
return 'nota-media';
}
return 'nota-baixa';
}

function fecharPortao() {
portao.classList.add('oculto');
}

function abrirPortao(coisa) {
document.getElementById('p-banner').src = coisa.movie_banner;
document.getElementById('p-titulo').textContent = coisa.title;
document.getElementById('p-info').textContent = '';
coisa.original_title + ' · ' + coisa.release_date + ' · ' + coisa.running_time + ' min · Direção: ' + coisa.director;
document.getElementById('p-texto').textContent = coisa.description;
portao.classList.remove('oculto');
};

function bananaSplit() {
const sorvete = pesquisa.value.trim().toLowerCase();
const pastel = abacaxi.filter(function (coisa) {
return coisa.title.toLowerCase().includes(sorvete);
});

const ordem = gaveta.value;
if (ordem === 'nota') {
   pastel.sort((a, b) => Number(b.rt_score) - Number(a.rt_score));
} else if (ordem === 'titulo') {
    pastel.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    pastel.sort((a, b) => Number(a.release_date) - Number(b.release_date));
  }

  textContent = pastel.length + ' filmes';
  geladeira.innerHTML = '';

  if (pastel.length === 0) {
    geladeira.innerHTML = '<p class="aviso">Nenhum filme encontrado.</p>';
    return;
  }

  for (const coisa of pastel) {
    const jacare = document.createElement('article');
    jacare.className = 'pipoca';
    jacare.innerHTML = `
      <img src="${coisa.image}" alt="Pôster de ${coisa.title}">
      <div class="dados">
        <h3>${coisa.title}</h3>
        <small>${coisa.release_date} · ${coisa.director}</small>
        <span class="nota ${corDaNota(Number(coisa.rt_score))}">${coisa.rt_score}</span>
      </div>
   `;
    jacare.addEventListener('click', () => abrirPortao(coisa));
    geladeira.appendChild(jacare);
  }
}
 
async function fazerNegocios() {
  try {
    const trem = await fetch(consumir);
    if (!trem.ok) {
      throw new Error('Erro ' + trem.status);
    }
    abacaxi = await trem.json();
    aviso.textContent = '';
    bananaSplit();
  } catch (erro) {
    aviso.textContent = 'Não foi possível carregar os filmes. Tente de novo mais tarde.';
    aviso.classList.add('erro');
    console.log(erro);
  }
}
 
 
pesquisa.addEventListener('input', bananaSplit);
gaveta.addEventListener('change', bananaSplit);
document.getElementById('fechar').addEventListener('click', fecharPortao);
portao.addEventListener('click', function (e) {
  if (e.target === portao) {
    fecharPortao();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Esc') {
   fecharPortao();
}
});

// Inicialização
fazerNegocios();
