const prompt = require("prompt-sync")();
let temperaturaCelsius = Number(prompt("Insira a temperatura em Celsius: "));
let temperaturafahrenheit = (temperaturaCelsius*9/5) + 32;
console.log(temperaturaCelsius,"°C equivale a ",temperaturafahrenheit,"°F");