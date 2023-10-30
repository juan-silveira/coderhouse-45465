// let fruta = {
//     nome: "maçã",
//     cor: "vermelho",
//     peso_total: {peso_B: 120, peso_L: 100},
//     tipo: "fruta"
// }

// fruta.nome = "banana";
// fruta.cor = "amarela";
// console.log(fruta.cor);

class Alimento{
    constructor(nome, cor, peso, tipo){
        this.nome = nome;
        this.cor = cor;
        this.peso = peso;
        this.tipo = tipo;
    }
    showDesc(){
        console.log(this)
    }
}

const alimento1 = new Alimento("Maçã", "Vermelho", "100", "Fruta");
const alimento2 = new Alimento("Alface", "Verde", "50", "Verdura");

alimento1.showDesc();
alimento2.showDesc();

