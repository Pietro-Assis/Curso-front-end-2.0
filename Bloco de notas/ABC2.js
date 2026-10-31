const prompt = require("prompt-sync")();
let valorCompra = Number(prompt("Insira o valor da compra: "));
if (valorCompra > 200){console.log("Sua compra pode ter frete gratís!")};