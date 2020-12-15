var hamburguer = document.querySelector(".hamburguer");
var btn_adicionar = document.getElementById("but-add");
var input_nome = document.getElementById("input_nome");
var input_email = document.getElementById("input_email");
var input_avatar = document.getElementById("input_avatar");
var sec_listaContato = document.getElementById("sec-listaContato");

var ListaNome = [];

hamburguer.addEventListener("click",function(){
    var barralat = document.querySelector(".barralat").classList.toggle("show-menu");
});

btn_adicionar.addEventListener("click", function(evento){
    evento.defaultPrevented();
    montaLista();
})
input_nome.addEventListener("focus", function(evento){
    evento.target.select();
}) 

function montaLista(){
    var nomeInputado = input_nome.value;
    var emailInputado = input_email.value;
    var avatarInputado = input_avatar.value;

    var NovaTag = ''

    ListaNome.push({nome: nomeInputado, email: emailInputado, avatar: avatarInputado});
    ListaNome.map(function(obj){
        NovaTag += `li class="card">
        <button class="card-edit-butt">  
             <i class="far fa-edit"></i>
        </button>
        <img src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/80.png" alt="" class="card-midia">
        <h3>${obj.input_nome}</h3>

    </li>`
    })

    sec_listaContato.innerHTML = NovaTag;

}