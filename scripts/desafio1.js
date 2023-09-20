let nome = prompt("Digite seu nome:");
let nascimento = prompt("Digite seu ano de nascimento. Ex. '1999':");
let anoAtual = new Date;

alert("Olá " + nome + "! Você tem " +  (anoAtual.getFullYear() - nascimento*1) + " anos!");