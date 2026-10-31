const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite o seu numero: "));
if (numero > 0)
{
	console.log("o seu numero é positivo");
}
else
{	
	console.log("o seu numero é negativo ou nulo");
};