//Secção de Dados
//Vetor, com dicionarios dentro dele
const beneficios = [
    {
        icone: "🥖",
        titulo: "Tudo frequinho",
        Texto: "Produção diária para você receber produtos sempre frescos",
    },
    {
        icone: "☕",
        titulo: "Tinta de impressora de qualidade",
        Texto: "Tonta de impressora feita na hora do mais alto nivel",
    },
    {
        icone: "❤️",
        titulo:"Feito com muito carinho" ,
        Texto: "Receitas pensadas para cada código",
    },
];
const produtos = [
    {
        nome:"Pão francês",
        descrição:"Crocante por fora e macio por dentro",
        preço:"RS2,50",
        imagem:"🥖",
    },
    {
        nome:"pão de minas",
        descrição:"importado",
        preço:"RS10,99",
        imagem:"🧀",
    },
    {
        nome:"Café preto",
        descrição:"Café que não é branco",
        preço:"RS50,00",
        imagem:"☕",
    },
    {
        nome:"rosquinha",
        descrição:"rosquinha",
        preço:"rosquinha",
        imagem:"🍩",
    },
];
const listaBeneficios = document.getElementById("ListaBeneficios");
const formPedido = document.getElementById("formPedido");
const campoNome = document.getElementById("campoNome");
const campoProduto = document.getElementById("campoProduto");
const campoQuantidade = document.getElementById("campoQuantidade");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");
//Função para formatar dinheiro
function formatarMoeda(valor){
    return valor.toLocalString(
        "pt-br",{
            style:"currency",
            currency:"BRL",
        }
    )
}
//Aqui vou criar um laço de repetição para executar um determinado codigo mais de uma vez
function gerarBeneficios(){
    
    for (let i = 0; 1 < beneficios.length; i++){
    const item = document.createElement("li");
    item.className="beneficio";
    //criamos os elementos internos
    const icone = document.createElement("div");
    const titulo = document.createElement("h3");
    const texto = document.createElement("p");
    icone.className = "icone";
    icone.textContent = beneficios[i].icone;
    titulo.textContent = beneficios[i].titulo;
    texto.textContent = beneficios[i].texto;
    //colocamos os elementos dentro do li
    item.appendChild(icone);
    item.appendChild(titulo);
    item.appendChild(texto);
    //colocamos o li dentro da lista
    listaBeneficios.appendChild(item);
    }
}
function gerarProdutos (){
    listaProdutos.textContent = "";
    for (let i = 0; i<produtos.length; i++){
    const card = document.createElement("article");
    card.className = "produto-card";

    const imagem = document.createElement("div");
    imagem.className = "produto-card";
    imagem.textContent = produtos[i];

    const titulo = document.createElement("h3");
    titulo.textcontent = produtos[i];
    
    const descrição = document.createElement("p");
    descrição.innerText = produtos[i];

    const preço = document.createElement("strong");
    preço.className = "preço";
    preço.innerText = formatarMoeda(produtos[i].preço);

    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(descrição);
    card.appendChild(preço);

}}
function preencherProdutos(){
    for (let i = 0; i <produtos.length; i++){
        const opção = document.createElement("option")

        opção.value = 1
        opção.textContent = produtos[i].nome, "-"
        formatarMoeda(produtos[i].preço)

        campoProduto.appendChild(opção)
    }
}
function calcularPedido(preço,quantidade){
    const total = preço*quantidade
    return total
}
formPedido.addEventListener("submit",function(event){
    event.preventDefault()
    mensagem.textContent=""
    resultado.textContent=""
    const nome = campoNome.value.trim();
    const produtoSelecionado = campoProduto.value;
    const quantidade = Number(campoQuantidade.value)

if(nome == ""){
    mensagem.textContent = "digite um nome para continuar"
    campoNome.focus()
    return
}
if(produtoSelecionado == "" ){
    mensagem.innerText = "escolha um produto"
    campoProduto.focus
    return
}
if (quantidade < 1){
    mensagem.textContent = "a quantidade deve ser pelo menos 1"
    campoQuantidade.focus 
    return
}
const indiceProduto = Number(produtoSelecionado)
const produto = produtos(indiceProduto)
const total = calcularPedido(produto.preço,quantidade)
const resultadoCard = document.createElement("div")
resultadoCard.className = "resultado-card"
const saudacao = document.createElement("h3")
saudacao.textContent = "ola", nome, "!"
const resumo = document.createElement("p")
resumo.textContent = quantidade, "X", produto.nome
})