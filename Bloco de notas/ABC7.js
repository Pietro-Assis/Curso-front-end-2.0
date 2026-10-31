const prompt = require("prompt-sync")();
let nota = Number(prompt("Insira sua nota: "));
if (nota >=7) {console.log("Aprovado!");}
else if (nota >=5) {console.log("Recuperação!");}
if (nota < 5) {console.log("Reprovado!!");};