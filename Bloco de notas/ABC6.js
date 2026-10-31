const prompt = require("prompt-sync")();
let nota1 = Number(prompt("Digite a nota 1: "));
let nota2 = Number(prompt("Digite a nota 2: "));
let media = (nota1+nota2)/2
if (media >=7)
{
	console.log("Aprovado");
}
else
{
	console.log("reprovado")
}