const api = 'https://dog.ceo/api/breeds/image/random'
const imagem = document.querySelector('#imagem');
const botaoTrocar = document.querySelector('#trocar')

 async function carregarCarrocho() {

    try { // tenta executar a api, e se nao for vai la pro catch la embaixo ó
        const resposta = await
        fetch('https://dog.ceo/api/breeds/image/random');

        const dados = await resposta.json()
        imagem.src = dados.message
    } catch (erro) { //errro caso nao funcione 
        console.log('Bixou', erro)
    }
 }



botaoTrocar.addEventListener('click', carregarCarrocho)

carregarCarrocho()













































































const nav = document.getElementById('nave');
const hamburgo = document.getElementById('botaoHamburgo')

hamburgo.addEventListener('click', function(){
    nav.classList.toggle('escondido')
});

const tema = document.getElementById('tema')
const body = document.getElementById('body')


tema.addEventListener('click', function(){
    body.classList.toggle('escuro')
    const escuro = document.body.classList.contains('escuro');
    tema.textContent = escuro ? "Tema claro" : "Tema Escuro";
});















let nomeCookie = "nome";
let valorCookie = document.getElementById("input")
tema.addEventListener('click', function (){
    let cookie = document.cookie = nomeCookie + " = " + valorCookie.value;
    console.log(cookie)
})

// function getCookie(nomeCookie) {
//   let name = nomeCookie + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i <ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }


let valor_Contado = 1;
console.log(valor_Contado)
const p = document.getElementById("PP")

botaoTrocar.addEventListener('click', function(){
    valor_Contado++;
    console.log(valor_Contado)
    p.innerHTML ="Cachorros Sorteados: " + valor_Contado;

    return valor_Contado
})


