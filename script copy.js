var hamburguer = document.querySelector(".hamburguer");
var btn_adicionar = document.getElementById("but-add");
var input_nome = document.getElementById("nome");
var input_email = document.getElementById("email");
var input_avatar= document.getElementById("avatar");
var ul_listaContato = document.getElementById("lista-contato")


var ListaNome = [] //monta uma lista

hamburguer.addEventListener("click",function(){
    var barralat = document.querySelector(".barralat").classList.toggle("show-menu");
});


btn_adicionar.addEventListener("click",function(evento){
    console.log('botao add');
    evento.preventDefault();
    listar();
    
    
});


input_nome.addEventListener("focus", function(evento){
    evento.target.select();
})

//montar lista 
function listar(){
    var nome_lista = input_nome.value;
    //console.log("inpu", input_nome);
    var addNovaTag = ''
    ListaNome.push(nome_lista);
    
    ListaNome.map(function(nome){
            addNovaTag +=  `
            <li class="card">
            <button class="card-edit-butt">  
                 <i class="far fa-edit"></i>
            </button>
            <img src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/80.png" alt="" class="card-midia">
            <h3>${nome}</h3>

            </li>`

        
    })

    ul_listaContato.innerHTML = addNovaTag;
    
    console.log('Map', addNovaTag)

}