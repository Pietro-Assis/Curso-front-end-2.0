let InputNome = document.querySelector("#nome-cliente");
let InputItem = document.querySelector("#item");
let InputQuantidade = document.querySelector("#quantidade");
let InputObservacao = document.querySelector("#observacao");

const formPedido = document.getElementById("form-pedido");

const erroNome = document.getElementById("erro-nome");
const erroItem = document.getElementById("erro-item");
const erroQuantidade = document.getElementById("erro-quantidade");

const btnPedir = document.getElementById("btn-pedir");
const contadorPedidos = document.querySelector("#contador-pedidos");
const listaVazia = document.getElementById("lista-vazia");
const listaPedidos = document.querySelector("#lista-pedidos");
const totalGeral = document.getElementById("total-geral");
//console.log(formPedido,nomeCliente,erroNome,item,erroItem,quantidade,erroQuantidade,observacao,btnPedir,contadorPedidos,listaVazia,listaPedidos,totalGeral);

formPedido.addEventListener("submit",function(evento){
    evento.preventDefault();
    let nome = InputNome.value.trim();
    let item = InputItem.value.trim();
    let observacao = InputObservacao.value.trim();

    if(InputQuantidade.value === ""){
        evento.preventDefault();    
        InputQuantidade.focus();
        erroQuantidade.textContent = "insira uma quantidade válida"
        console.log(InputQuantidade, "input");
        let quantidade = 0
        console.log(quantidade, "quantidade");
    }
    else {
        quantidade = parseInt(InputQuantidade.value);



    if (quantidade <= 0 || quantidade > 10){
        InputQuantidade.focus();
        erroQuantidade.textContent = "Insira uma quantidade válida.";
    }
    else {
        erroQuantidade.textContent = ""
    };
        console.log("else")
    };


    if (nome === "") {
        InputNome.focus();
        erroNome.textContent = "Insira o seu nome.";
    }
    else {
        erroNome.textContent = ""
    };


    if (item === "") {
        InputItem.focus();
        erroItem.textContent = "Escolha um produto.";
    }
    else {
        erroItem.textContent = ""
    };

    let opcao = InputItem.options[InputItem.selectedIndex];
    let total = Number(opcao.dataset.preco);
    let totalPedido = quantidade*total;
    console.log(totalPedido, "Total do pedido");

    const card = document.createElement("li");
    card.classList.add("pedido");

    const titulo = document.createElement("strong");
    titulo.textContent = ("Pedido de "+nome);
    card.appendChild(titulo);
    listaPedidos.appendChild(card);

    const precoExibido = document.createElement("p");
    precoExibido.textContent = ("R$"+totalPedido+",00");
    precoExibido.classList.add("pedido-total");
    card.appendChild(precoExibido);

    const desc = document.createElement("p");
    desc.textContent =  (quantidade+" "+item+"s");
    desc.classList.add("pedido-desc");
    card.appendChild(desc);

    const observado = document.createElement("p");
    observado.textContent = ("Observação: "+observacao);
    observado.classList.add("pedido-obs");
    card.appendChild(observado);

})