const calcularBtn = document.getElementById("calcular");
calcularBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    var valor = parseFloat(document.getElementById("valorEmprestimo").value);
    const select = document.getElementById("selectParcelas").value;
    const resultado = document.getElementById("resultado");
    var info = document.getElementById("info");
    info.innerHTML = "";
    resultado.style.display = "block"
    switch (select) {
        case "1":
            valor = valor * 1.2;
            info.innerHTML = "<p><b>VALOR TOTAL: R$" + valor.toFixed(2) + "</b></p>";
            for (i = 0; i < 12; i++) {
                info.insertAdjacentHTML("beforeend", "<p>Parcela " + (i + 1) + ": " + "R$" + (valor/12).toFixed(2) + "</p>")
            }
            break;

        case "2":
            valor = valor * 1.5;
            info.innerHTML = "<p><b>VALOR TOTAL: R$" + valor.toFixed(2) + "</b></p>";
            for (i = 0; i < 24; i++) {
                info.insertAdjacentHTML("beforeend", "<p>Parcela " + (i + 1) + ": " + "R$" + (valor/24).toFixed(2) + "</p>")
            }
            break;

        case "3":
            valor = valor * 2;
            info.innerHTML = "<p><b>VALOR TOTAL: R$" + valor.toFixed(2) + "</b></p>";
            for (i = 0; i < 36; i++) {
                info.insertAdjacentHTML("beforeend", "<p>Parcela " + (i + 1) + ": " + "R$" + (valor/36).toFixed(2) + "</p>")
            }
            break;

        default:
            break;
    }
})