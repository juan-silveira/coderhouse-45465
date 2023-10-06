function aluno(nome, idade) {
    this.nome = nome;
    this.idade = parseInt(idade);
    this.presente = false;
    this.addPresenca = function () {
        this.presente = true;
    }
}

let turma = [];

turma.push(new aluno("juan", "37"));
turma.push(new aluno("maria", "21"));
turma.push(new aluno("flávia", "34"));
turma.push(new aluno("joão", "23"));
turma.push(new aluno("ana", "33"));

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
turma[3].addPresenca();
idadeTurma(turma);
presentesTurma(turma);