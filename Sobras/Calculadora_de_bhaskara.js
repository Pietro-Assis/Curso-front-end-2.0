const user_input = require("prompt-sync")();
const a = Number(user_input("Digite o A da equação: "));
const b = Number(user_input("Digite o B da equação: "));
const c = Number(user_input("Digite o C da equação: "));
if (a === 0){
console.log("o valor de A não é valido, insira um valor real para A.");
console.log("Se este for o valor de A, a equação não é quadrática");}
else{ 
let delta = (b*b)-4*a*c;
let raizDelta = Math.sqrt(delta)
console.log("delta é", delta, "e sua raíz é", raizDelta);
let x1 = (-b-raizDelta)/(2*a);
let x2 = (-b+raizDelta)/(2*a);
console.log("As raízes são", x1,"e", x2);};