const prompt = require("prompt-sync")();
let idade = Number(prompt("Digite sua idade: "));
if (idade >=18) {console.log("Você pode tirar sua CNH!");}
else {console.log("você não pode tirar a sua CNH")};