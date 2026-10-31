const prompt = require("prompt-sync")();
const senhaCorreta = "1234"
let senha = prompt("Digite sua senha: ");
if (senha === senhaCorreta)
{
	console.log("aprovado");
}
else
{
	console.log("negado");
}
