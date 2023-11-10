class Curso {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
        this.description = description;
        this.onCart = false;
    }
}

let cursos = [];
let carrinho = [];

//Popula o array de cursos com todos os cursos
cursos.push(new Curso("0","Desenvolvimento Web", 199.50, "Curso criação de site com HTML, CSS, GIT, JavaScript, mercado programação, projeto final. Conhecimentos essenciais para desenvolvimento web."));
cursos.push(new Curso("1","Javascript", 249.50, "Curso aborda fundamentos de linguagem de programação, jQuery, AJAX e desenvolvimento web interativo, preparando para frameworks JavaScript."));
cursos.push(new Curso("2","React", 149.50, "Curso ensina pensamento em React JS, design eficiente, Firebase, prototipagem. Desenvolvimento de aplicações SPA focado no usuário final."));
cursos.push(new Curso("3","Backend", 499.50, "Curso ensina desenvolvimento moderno com Node.js, MongoDB, Javascript assíncrono, NoSQL e criação de robustas aplicações de back end escaláveis."));
cursos.push(new Curso("4","Figma", 149.50, "Curso focado no Figma para design UX/UI. Requer conhecimento prévio em design, grids, dark patterns e acessibilidade. Habilidades em telas mobile first."));

const cursosCards = document.getElementById("cursos");
const cartNumber = document.getElementById("cart-number")

// Função para auxiliar a criação de elementos html
const createElement = (tag, classNames) => {
    const element = document.createElement(tag);
    element.className = classNames;
    return element;
}

// Monta os cards dos cursos
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

// Função para exibir a quantidade de cursos no ícone do carrinho no menu
const quantidadeCursos = (cursos) => {

    var qde = 0;
    cursos.forEach(element => {
        if (element.onCart == true) {
            qde++
        };
    });
    return qde;
}

// Função para remover um item do carrinho ao clicar no ícone de lixeira na tabela do carrinho
const removeItem = ({ target }) => {
    var iCart = "";
    var iCurso = "";
    if (target.parentNode.id.startsWith("remove")) {
        iCart = target.parentNode.getAttribute("index") - 1;
    } else {
        iCart = target.getAttribute("index") - 1;
    }
    if (iCart >= 0 && iCart <= carrinho.length) {
        var nomeCurso = carrinho[iCart].name;
        cursos.forEach((e, i) => {
            if (e.name == nomeCurso)
                iCurso = i;
        })
        cursos[iCurso].onCart = false;
        Swal.fire({
            title: "Curso removido!",
            text: "Curso " + carrinho[iCart].name + " removido do carrinho!",
            icon: 'success'
        })
        carrinho.splice(iCart, 1);
        const btn = document.getElementById("curso" + iCurso);
        btn.removeAttribute("disabled");
    }
    cartNumber.innerText = quantidadeCursos(cursos);
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
    showCart();
}

// Função para limpar os itens do carrinho e montar o carrinho com os cursos com o atributo onCart = true
const showCart = () => {
    carrinho = [];
    const cart = document.getElementById("cart");
    cursos.forEach(e => {
        if (e.onCart == true) {
            carrinho.push({id:e.id, name: e.name, price: e.price });
        }
    });
    if (carrinho.length == 0) {
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
        cartTHead.innerHTML = `<thead>
            <tr class="text-center">
                <th scope="col">#</th>
                <th scope="col">Curso</th>
                <th scope="col">Preço</th>
                <th scope="col">Remover</th>
            </tr>
        </thead>`;
        const cartTBody = document.getElementById("cartTBody");
        cartTBody.innerHTML = "";
        var tValue = 0;
        carrinho.forEach((e, i) => {
            cartTBody.insertAdjacentHTML("beforeend", `
            <tr class="text-center">
                <th scope="row">${i + 1}</th>
                <td>${e.name}</td>
                <td>${e.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td class="remove" index="${i + 1}" id="remove${i + 1}"><i class="bi bi-trash text-danger"></i></td>
            </tr>`)
            tValue += e.price;
        })
        cartTBody.insertAdjacentHTML("beforeend", `
            <tr class="text-center">
                <th scope="row"></th>
                <td class="fw-bold fs-5">TOTAL:</td>
                <td class="fw-bold fs-5">${tValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td></td>
            </tr>`
        )

        for (i = 0; i < carrinho.length; i++) {
            document.getElementById("remove" + (i + 1)).addEventListener("click", removeItem)
        }
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }
}

// Função para adicionar um item ao carrinho ao clicar no botão comprar de cada card
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

// Função para salvar o carrinho no localStorage
const setCart = (obj) => {
    let id = obj.id;
    cursos[id].onCart = true;
    const btn = document.getElementById("curso" + id);
    btn.setAttribute("disabled", '');
}

// Varre o array cursos e adiciona Escutador de Evento para cada botão comprar de cada card
for (i = 0; i < cursos.length; i++) {
    document.getElementById('curso' + i).addEventListener("click", addToCart)
}

// Função para montar o carrinho à partir de informações que estavam no localStorage
const buildCart = () => {
    const cart = JSON.parse(localStorage.getItem("carrinho"));
    for (const item of cart){
        setCart(item)
    }
    cartNumber.innerText = quantidadeCursos(cursos);
    showCart();
}

// Verifica se a chave carrinho existe, e 
if(localStorage.getItem("carrinho") && localStorage.getItem("carrinho") !== "[]"){
    buildCart();
}