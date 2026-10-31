const prompt = require("prompt-sync")();
let numero1 = Number(prompt("Insira primeiro numero: "));
let numero2 = Number(prompt("Insira segundo numero: "));
console.log("A soma dos valores é ", numero1, "+", numero2, "=", numero1+numero2);
console.log("A diferença entre ", numero1, "e", numero2, "é", numero1-numero2);
console.log("O resultado da multiplicação dos valores ", numero1, "X", numero2, "=", numero1*numero2);
console.log("a razão entre", numero1, "e", numero2, "é", numero1/numero2);