let nomes = [];

const addNomes = () => {
    let nome = "";
    do {
        nome = prompt("Insira um nome até digitar fim:")
        if(nome !== "fim"){
            nomes.push(nome);
        }
        
    } while (nome !== "fim");

    for (const nome of nomes){
        console.log(nome)
    }
}

addNomes();
