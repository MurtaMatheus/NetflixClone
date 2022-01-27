

document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('btnDireita');

    button.onclick = function () {

        document.getElementById('populares').scrollLeft += 1900

    };

}, false)


document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('btnEsquerda');

    button.onclick = function () {

        document.getElementById('populares').scrollLeft -= 1900

    };

}, false)




window.addEventListener("scroll", function () {
    var scroll = this.scrollY;
    if (scroll == 0) {
        let cabecalho = document.getElementById("cabecalho");
        cabecalho.style.background = "transparent";
        cabecalho.style.color = "white";
    } else {
        let cabecalho = document.getElementById("cabecalho");
        cabecalho.style.background = "#0D0D0D";
    }
});