const temperatura = document.getElementById("temperatura");
const saida = document.getElementById("result");
const botao = document.getElementById("botao")

botao.addEventListener(
    "click", function(){
        if (temperatura.value === ""){
            saida.textContent = "Digite uma Temperatura!"
            temperatura.focus()
            console.log('if')
            return
        }
        const abc = temperatura.value;
        const resultado = (abc*1.8)+32;
        saida.innerText = "a temperatura é: "+resultado;
    } 
)