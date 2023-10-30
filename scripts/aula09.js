const colors = [];

function addColor () {
    for (i = 0; i < 5; i++) {
        colors.push(prompt("Digite a cor " + (i+1) + "/5 do array:"))
    }
    console.log("Array colors: " + colors)
    console.log("Array colors tem : " + colors.length + " posições")

    let indexColor = colors.indexOf(prompt("Digite uma cor para ser excluída:"))

    if(indexColor != -1){
        colors.splice(indexColor)
        console.log("Cor excluída!")
    } else {
        console.log("Cor não existe no array!")
    }

    colors.forEach((e, i) => {
        console.log("Na posição " + i + " temos a cor " + e)
    });


    let newColor = prompt("Digite uma nova cor:")
    if(!colors.includes(newColor)){
        colors.unshift(newColor)
    } else{
        console.log("Essa cor já existe!")
    }
    console.log(colors)
}

addColor();

