class Curso {
    constructor(name, price, description) {
        this.name = name;
        this.price = parseFloat(price);
        this.description = description;
        this.onCart = false;
    }
}

let cursos = [];

cursos.push(new Curso("Desenvolvimento Web", 199.50, "Curso criação de site com HTML, CSS, GIT, JavaScript, mercado programação, projeto final. Conhecimentos essenciais para desenvolvimento web."));
cursos.push(new Curso("Javascript", 249.50, "Curso aborda fundamentos de linguagem de programação, jQuery, AJAX e desenvolvimento web interativo, preparando para frameworks JavaScript."));
cursos.push(new Curso("React", 149.50, "Curso ensina pensamento em React JS, design eficiente, Firebase, prototipagem. Desenvolvimento de aplicações SPA focado no usuário final."));
cursos.push(new Curso("Backend", 499.50, "Curso ensina desenvolvimento moderno com Node.js, MongoDB, Javascript assíncrono, NoSQL e criação de robustas aplicações de back end escaláveis."));
cursos.push(new Curso("Figma", 149.50, "Curso focado no Figma para design UX/UI. Requer conhecimento prévio em design, grids, dark patterns e acessibilidade. Habilidades em telas mobile first."));

const cursosCards = document.getElementById("cursos");

// Função para auxiliar a criação de elementos html
const createElement = (tag, classNames) => {
    const element = document.createElement(tag);
    element.className = classNames;
    return element;
}

// const createCards = (curso, id) => {
//     const col = createElement('div', 'col-md-4 mt-4')
//     const card = createElement('div', 'card');
//     const card_header = createElement('div', 'card-header');
//     const card_body = createElement('div', 'card-body');
//     const card_footer = createElement('div', 'card-footer')
//     const card_button = createElement('button', 'btn btn-success')

//     col.appendChild(card);
//     card.appendChild(card_header);
//     card.appendChild(card_body);
//     card.appendChild(card_footer);
//     card_footer.appendChild(card_button);

//     card_header.innerHTML = `<b>Curso ${curso.name}</b>`;
//     card_body.innerHTML = curso.description;
//     card_button.innerHTML = `Comprar por ${curso.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`

//     card_button.setAttribute("id", "curso" + id)

//     return col;
// }

cursos.forEach((e, i) => {
    cursosCards.insertAdjacentHTML("beforeend", `
    <div class="col-md-4 mt-4">
        <div class="card">
            <div class="card-header"><b>Curso ${e.name}</b></div>
            <div class="card-body">${e.description}</div>
            <div class="card-footer">
                <button class="btn btn-success" id="curso${i}">Comprar por ${e.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</button>
            </div>
        </div>
    </div>
    `)
});

const valorCarrinho = (carrinho) => {
    var price = 0;
    carrinho.forEach(element => {
        if (element.onCart == true) {
            price = element.price + price;
        };
    });
    return console.log("O valor do carrinho é de : " + price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
}

const quantidadeCursos = (carrinho) => {
    
    var qde = 0;
    carrinho.forEach(element => {
        if (element.onCart == true) {
            qde++
        };
    });
    return console.log("A quantidade de cursos no carrinho é de " + qde + " cursos");
}

const showCart = () => {
    console.log("------------")
    let lista = [];
    cursos.forEach(e => {
        if(e.onCart == true){
            lista.push(e.name);
        }
    });
    lista.length == 0 ? console.log("Carrinho Vazio") : "";
    quantidadeCursos(cursos);
    valorCarrinho(cursos);
    
}

document.getElementById("show-cart").addEventListener("click", showCart)

const addToCart = ({target}) => {
    let id = target.id.split("").pop();
    cursos[id].onCart = true;
    const btn = document.getElementById("curso"+id);
    btn.setAttribute("disabled", '');
    console.log("Curso " + cursos[id].name + " adicionado ao carrinho!")
}

// cursos.forEach((e, i) => {
//     cursosCards.appendChild(createCards(e, i))
// });

for (i = 0; i < cursos.length; i++) {
    document.getElementById('curso'+i).addEventListener("click", addToCart)  
}

