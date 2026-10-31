// ============================================
// NimbusPhone — script.js
// Escreva o código de cada interação na seção correspondente.
// ============================================

// 1. Menu mobile (#btn-menu, #nav-menu)


// 2. Modo escuro (#btn-tema)


// 3. Cores do aparelho (.swatch, #aparelho, #nome-cor)


// 4. Estoque (#btn-comprar, #qtd-estoque)


// 5. Avaliação por estrelas (.estrela, #texto-avaliacao)


// 6. Contador de caracteres (#comentario, #contador-caracteres)


// 7. Perguntas frequentes (.faq-pergunta, .faq-resposta)


// 8. Caixa mágica (#input-magico)


// 9. Newsletter (#btn-assinar)

//-------------------------------------------------------------------------------------------------------------------

// 1. Menu mobile (#btn-menu, #nav-menu)
const btnMenu = document.getElementById("btn-menu")
const navMenu = document.getElementById("nav-menu")
btnMenu.addEventListener("click",function(){navMenu.classList.toggle("aberta")})

//--------------------------------------------------------------------------------------------------------------------

// 2. Modo escuro (#btn-tema)
const btnTema = document.getElementById("btn-tema")
btnTema.addEventListener("click", function(){
    document.body.classList.toggle("modo-escuro")
    const tema = document.body.classList.contains("modo-escuro")
    btnTema.textContent = tema ? " ☀️Modo Claro " : "🌙 Modo Escuro "
})

// --------------------------------------------------------------------------------------------------------------------------------------------

// 3. Cores do aparelho (.swatch, #aparelho, #nome-cor)
const btnCores = document.querySelectorAll(".swatch")
const aparelho = document.getElementById("aparelho")
const nomeCor = document.getElementById("nome-cor")
btnCores.forEach(function(botao){
    botao.addEventListener("click", function(){
        nomeCor.textContent = botao.dataset.cor; 
        aparelho.style.backgroundColor = botao.style.backgroundColor;
    })
})
//---------------------------------------------------------------------------------------------------------------------------------------------

// 4. Estoque (#btn-comprar, #qtd-estoque)
const btnCompra = document.getElementById("btn-comprar")
const quantidadeEstoque = document.getElementById("qtd-estoque")
btnCompra.addEventListener("click", function(){
    let estoque = Number(quantidadeEstoque.textContent)-1
    quantidadeEstoque.textContent = estoque
    if(estoque == 0){
        btnCompra.textContent = 'acabou :('
        btnCompra.disabled = true
    }
})

//---------------------------------------------------------------------------------------------------------------------------------------------

// 5. Avaliação por estrelas (.estrela, #texto-avaliacao)
const estrela = document.querySelectorAll(".estrela")
const textoAvaliação = document.getElementById("texto-avaliacao")
estrela.forEach(function(estrelaClicada){
    estrelaClicada.addEventListener('click', function(){
        const nota = Number(estrelaClicada.dataset.valor)
        estrela.forEach(function(estrela){
            const valor = Number(estrela.dataset.valor)
            if (valor<=nota) {
                estrela.classList.add("cheia")
            }
            else {estrela.classList.remove("cheia")}
        })
        textoAvaliação.textContent = `Você deu ${nota} estrelas!`
    })
})

//---------------------------------------------------------------------------------------------------------------------------------------------

// 6. Contador de caracteres (#comentario, #contador-caracteres)
const comentario = document.getElementById('comentario')
const contador = document.getElementById("contador-caracteres")
comentario.addEventListener("input",function(){
    const saida = comentario.value.length
    contador.textContent = saida
})
//---------------------------------------------------------------------------------------------------------------------------------------------

// 7. Perguntas frequentes (.faq-pergunta, .faq-resposta)
const perguntas = document.querySelectorAll(".faq-pergunta")
perguntas.forEach(function(pergunta){
    pergunta.addEventListener('click',function(){
        pergunta.nextElementSibling.classList.toggle('aberta')
    })
})

// --------------------------------------------------------------------------------------------------------------------------------------------

// 8. Caixa mágica (#input-magico) aaaaaaaaaaaaaaaaaaaaaaaaaaaarumar
const inputMagico = document.getElementById("input-magico")
inputMagico.addEventListener('input',function(){
    const texto = inputMagico.toLowercase().trim();
    document.body.classList.toggle('piscapisca', texto === 'bom dia')})
inputMagico.addEventListener('input',function(){
    const texto = inputMagico.toLowercase().trim();
    document.body.classList.toggle('piscapisca2', texto === 'bom dia')})
inputMagico.addEventListener('input',function(){
    const texto = inputMagico.toLowercase().trim();
    document.body.classList.toggle('piscapisca3', texto === 'bom dia')
})

// --------------------------------------------------------------------------------------------------------------------------------------------
// 9. Newsletter (#btn-assinar)
const btnAssinar = document.getElementById("btn-assinar")
btnAssinar.addEventListener("click", function(){
    btnAssinar.textContent = "Inscrito";
    btnAssinar.disabled = true
})