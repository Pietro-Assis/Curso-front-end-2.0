const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));



if (idade >=60) {
console.log("Você é um idoso!");
}

else if (idade >=18) {
console.log("Você é um Adulto!");
}

else if (idade >=13) {
console.log("você é um adolescente");
}

else if (idade === 0) {
console.log("Você é um recém-nascido");
}

else {
console.log("Você é uma criança!");}