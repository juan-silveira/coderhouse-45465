class Aluno {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = parseInt(idade);
    this.presente = false;
    }
    addPresenca() {
        this.presente = true;
    }
}

let turma = [];

turma.push(new Aluno("juan", "37"));
turma.push(new Aluno("maria", "21"));
turma.push(new Aluno("flávia", "34"));
turma.push(new Aluno("joão", "23"));
turma.push(new Aluno("ana", "33"));

const idadeTurma = (turma) => {
    var idade = 0;
    turma.forEach(element => {
        idade = element.idade + idade;
    });
    console.log("A idade da turma é: " + idade);
}

const presentesTurma = (turma) => {
    var presentes = 0;
    turma.forEach(element => {
        if (element.presente == true) {
            presentes++
        };
    });
    console.log("Quantidade de alunos presentes: " + presentes);
}

turma[0].addPresenca();
turma[1].addPresenca();
turma[3].addPresenca();
idadeTurma(turma);
presentesTurma(turma);