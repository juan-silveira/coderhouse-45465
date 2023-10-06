//1 - Identificar se um número é par ou ímpar
const handlePar = (num) => {
    if ((parseInt(num) % 2) == 0) {
        console.log("O número " + num + " é par!")
    } else {
        console.log("O número " + num + " é ímpar!")
    }
}

//2 - Informa a estação do ano
const handleWheather = (month) => {
    switch (month.toLowerCase()) {
        case "janeiro":
            console.log("O mês de " + month + " é verão!")
            break;
        case "fevereiro":
            console.log("O mês de " + month + " é verão!")
            break;
        case "março":
            console.log("O mês de " + month + " é verão!")
            break;
        case "abril":
            console.log("O mês de " + month + " é outono!")
            break;
        case "maio":
            console.log("O mês de " + month + " é outono!")
            break;
        case "junho":
            console.log("O mês de " + month + " é outono!")
            break;
        case "julho":
            console.log("O mês de " + month + " é inverno!")
            break;
        case "agosto":
            console.log("O mês de " + month + " é inverno!")
            break;
        case "setembro":
            console.log("O mês de " + month + " é inverno!")
            break;
        case "outubro":
            console.log("O mês de " + month + " é primavera!")
            break;
        case "novembro":
            console.log("O mês de " + month + " é primavera!")
            break;
        case "dezembro":
            console.log("O mês de " + month + " é primavera!")
            break;

        default:
            console.log("O valor digitado não é um mês!")
            break;
    }
}

//3 - Converte farenheit em celsius
const handleTemperature = (num) => {
    let celsius = 5 / 9 * (parseInt(num) - 32);
    console.log("A temperatura em Celsius é: " + celsius + "ºC")
}

//4 - Informa se o número é ou não primo
const handlePrimo = (num) => {
    var divisores = 0;

    for (i = 1; i <= parseInt(num); i++)
        if (parseInt(num) % i == 0)
            divisores++;

    if (divisores == 2) {
        console.log("O número " + num + " é primo!");
        return true;
    }
    else {
        console.log("O número " + num + " não é primo!");
        return false;
    }
}

//5 - Calcula o somatorio entre 1 e o número
const handleSomatorio = (num) => {
    var somatorio = 0;
    for (i = 1; i <= parseInt(num); i++) {
        somatorio = somatorio + i;
    }
    console.log("O somatório é " + somatorio);
}

//6 - Cubo do número
const handleCubo = (num) => {
    console.log(num + " elevado ao cubo é " + num ** 3)
}

//7 - Verifica se um número é divisível por outro
const handleDivisivel = (num1, num2) => {
    if (num1 % num2 == 0) {
        console.log(num1 + " é divisível por " + num2)
    } else {
        console.log(num1 + " não é divisível por " + num2)
    }
}

//8 - Informa o nome do mês
const handleMonth = () => {
    const month = parseInt(prompt("Digite o número de um mês:"));
    switch (month) {
        case 0:
            return 0;
        case 1:
            console.log("O mês " + month + " é janeiro!")
            break;
        case 2:
            console.log("O mês " + month + " é fevereiro!")
            break;
        case 3:
            console.log("O mês " + month + " é março!")
            break;
        case 4:
            console.log("O mês " + month + " é abril!")
            break;
        case 5:
            console.log("O mês " + month + " é maio!")
            break;
        case 6:
            console.log("O mês " + month + " é junho!")
            break;
        case 7:
            console.log("O mês " + month + " é julho!")
            break;
        case 8:
            console.log("O mês " + month + " é agosto!")
            break;
        case 9:
            console.log("O mês " + month + " é setembro!")
            break;
        case 10:
            console.log("O mês " + month + " é outubro!")
            break;
        case 11:
            console.log("O mês " + month + " é novembro!")
            break;
        case 12:
            console.log("O mês " + month + " é dezembro!")
            break;

        default:
            console.log("Valor de mês incorreto!")
            break;
    }
}

//9 - Um número elevado ao segundo número
const handlePotencia = (num1, num2) => {
    console.log(num1 + " elevado à " + num2 + "ª potência é " + num1 ** num2)
}

//10 - Calcule a idade em anos, meses e dias
const handleIdade = (ano, mes, dia) => {

}

// handlePar(prompt("Digite um número para saber se é par ou ímpar:"))

// handleWheather(prompt("Digite um mês por extenso:"))

// handleTemperature(prompt("Digite uma temperatura em Farenheit para converter para Celsius:"))

// while (handlePrimo(prompt("Digite um número para saber se é primo:")) == false) {
//     handlePrimo(prompt("Digite um número para saber se é primo:"))
// }

// handleSomatorio(prompt("Digite um número para saber o somatório entre 1 e ele mesmo:"))

// handleCubo(prompt("Digite um número para elevar ao cubo:"));

// handleDivisivel(prompt("Digite um número para ver se ele é divisível pelo próximo:"), prompt("Digite o número que vai dividir o primeiro:"));

// while(handleMonth() != 0){
//     handleMonth();
// }

// handlePotencia(prompt("Digite um número:"), prompt("Digite o número da potência:"));

// handleIdade(prompt("Digite seu ano de nascimento:"))
handleIdade(1986,8,27)
