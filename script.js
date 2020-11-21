var hamburguer = document.querySelector(".hamburguer");
var ul_listaContato = document.getElementById("sec-listContato");
var btn_adiconar = document.getElementById("but-add");
var input_nome = document.getElementById("nome");


hamburguer.addEventListener("click",function(){
    var barralat = document.querySelector(".barralat").classList.toggle("show-menu");
});

btn_adiconar.addEventListener("click", function(evento){
    evento.preventDefault();
})

input_nome.addEventListener("focus", function(evento){
    evento.target.select();
})