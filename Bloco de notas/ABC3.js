const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));

if (numero % 2 === 0) {
	console.log("O seu numero é par");
}
else {
	console.log("o seu numero é impar");
};