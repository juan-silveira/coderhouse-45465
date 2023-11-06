class Curso {
    constructor(name, price, description) {
        this.name = name;
        this.price = parseFloat(price);
        this.description = description;
        this.onCart = false;
    }
}

let cursos = [];
let carrinho = [];

cursos.push(new Curso("Desenvolvimento Web", 199.50, "Curso criação de site com HTML, CSS, GIT, JavaScript, mercado programação, projeto final. Conhecimentos essenciais para desenvolvimento web."));
cursos.push(new Curso("Javascript", 249.50, "Curso aborda fundamentos de linguagem de programação, jQuery, AJAX e desenvolvimento web interativo, preparando para frameworks JavaScript."));
cursos.push(new Curso("React", 149.50, "Curso ensina pensamento em React JS, design eficiente, Firebase, prototipagem. Desenvolvimento de aplicações SPA focado no usuário final."));
cursos.push(new Curso("Backend", 499.50, "Curso ensina desenvolvimento moderno com Node.js, MongoDB, Javascript assíncrono, NoSQL e criação de robustas aplicações de back end escaláveis."));
cursos.push(new Curso("Figma", 149.50, "Curso focado no Figma para design UX/UI. Requer conhecimento prévio em design, grids, dark patterns e acessibilidade. Habilidades em telas mobile first."));

const cursosCards = document.getElementById("cursos");
const cartNumber = document.getElementById("cart-number")

// Função para auxiliar a criação de elementos html
const createElement = (tag, classNames) => {
    const element = document.createElement(tag);
    element.className = classNames;
    return element;
}

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

const quantidadeCursos = (cursos) => {

    var qde = 0;
    cursos.forEach(element => {
        if (element.onCart == true) {
            qde++
        };
    });
    return qde;
}

const removeItem = ({target}) => {
    var index = "";
    if(target.parentNode.id.startsWith("remove")){
        index = target.parentNode.getAttribute("index") - 1;
    } else {
        index = target.getAttribute("index") - 1;
    }
    if(index >= 0 && index <= carrinho.length){
        const btn = document.getElementById("curso" + index);
        btn.removeAttribute("disabled");
        cursos[index].onCart = false;
        Swal.fire({
            title: "Curso removido!",
            text: "Curso " + carrinho[index].name + " removido do carrinho!",
            icon: 'success'
        })
        carrinho.splice(index, 1);
    }
    cartNumber.innerText = quantidadeCursos(cursos);
    showCart();
}

const showCart = () => {
    carrinho = [];
    const cart = document.getElementById("cart");
    cursos.forEach(e => {
        if (e.onCart == true) {
            carrinho.push({name: e.name, price: e.price});
        }
    });
    if(carrinho.length == 0){
        cart.style.display = "none";    
        Swal.fire({
            title: 'Carrinho Vazio!',
            text: 'Adicione curso ao carrinho antes de ver o carrinho.',
            icon: 'error'
          })
    } else {
        cart.style.display = "block";
        const cartTHead = document.getElementById("cartTHead");
        cartTHead.innerHTML = "";
        cartTHead.innerHTML =  `<thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Curso</th>
                <th scope="col">Preço</th>
                <th scope="col">Remover</th>
            </tr>
        </thead>`;
        const cartTBody = document.getElementById("cartTBody");
        cartTBody.innerHTML = "";
        var tValue = 0;
        carrinho.forEach((e,i) => {
            cartTBody.insertAdjacentHTML("beforeend", `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${e.name}</td>
                <td>${e.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                <td class="remove" index="${i + 1}" id="remove${i + 1}"><i class="bi bi-trash text-danger"></i></td>
            </tr>`)
            tValue += e.price; 
        })
        cartTBody.insertAdjacentHTML("beforeend", `
            <tr>
                <th scope="row"></th>
                <td class="fw-bold">TOTAL:</td>
                <td class="fw-bold">${tValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                <td></td>
            </tr>`
        )
        for (i = 0; i < carrinho.length; i++) {
            document.getElementById("remove" + (i + 1)).addEventListener("click", removeItem)
        }
    }
}

const addToCart = ({ target }) => {
    let id = target.id.split("").pop();
    cursos[id].onCart = true;
    const btn = document.getElementById("curso" + id);
    btn.setAttribute("disabled", '');
    cartNumber.innerText = quantidadeCursos(cursos);
    Swal.fire({
        title: "Curso adicionado ao carrinho!",
        text: "Curso " + cursos[id].name + " adicionado ao carrinho!",
        icon: 'success'
    })
    showCart();
}

for (i = 0; i < cursos.length; i++) {
    document.getElementById('curso' + i).addEventListener("click", addToCart)
}

const buildCart = async () => {
    for (i = 0; i < carrinho.length; i++) {
        createTableRow(pkData.pokedex[i]);
    }
}