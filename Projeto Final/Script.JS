const nav = document.getElementById('nave');
const hamburgo = document.getElementById('botaoHamburgo')

hamburgo.addEventListener('click', function(){
    nav.classList.toggle('escondido')
});

const tema = document.getElementById('tema')
const body = document.getElementById('body')
tema.addEventListener('click', function(){
    body.classList.toggle('escuro')

})