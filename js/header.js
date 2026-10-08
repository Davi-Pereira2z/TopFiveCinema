//Esse js é para configurar qualquer funcionamento do header

//lista no header para celular
var botao = document.getElementById("botaoMenu");
var menu = document.getElementById("menu");

botao.addEventListener("click", function () {
    menu.classList.toggle("menuAberto");
});

var paginaAtual = location.pathname.split("/").pop();
var links = document.querySelectorAll(".linkMenu");
for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === paginaAtual) {
        links[i].classList.add("linkAtivo");
    }
}
