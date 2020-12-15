var hamburguer = document.querySelector(".hamburguer");
var btn_adicionar = document.getElementById("but-add");
var input_nome = document.getElementById("input_nome");
var input_email = document.getElementById("input_email");
var input_avatar = document.getElementById("input_avatar");
var sec_listaContato = document.getElementById("lista-contato");

var ListaBase = [];
var ListaFiltrada = [];

hamburguer.addEventListener("click", function () {
    var barralat = document.querySelector(".barralat").classList.toggle("show-menu");
});

btn_adicionar.addEventListener("click", function (evento) {
    evento.preventDefault();
    var nomeInputado = input_nome.value;
    var emailInputado = input_email.value;
    var avatarInputado = input_avatar.value;

    console.log('antes do filtro', ListaBase);
    ListaBase = ListaBase.filter(obj=>obj.email != emailInputado);
    console.log('depois do filtro', ListaBase);
    ListaBase.push({ nome: nomeInputado, email: emailInputado, avatar: avatarInputado });
    console.log('depois de inserido', ListaBase);

    montaLista();
});

input_nome.addEventListener("focus", function (evento) {
    evento.target.select();
})

function filtraLista(){
    /** Vai a logica para aplicar o filtro antes de montar a lista */
    /** se tiver preenchido a pesquisa, faz o filtro se nao mnostra tudo */
    ListaFiltrada = ListaBase.filter(obj=> obj.email === "ayrtonkrizan@gmail.com");
}
function montaLista() {
    var NovaTag = '';
    filtraLista();
    ListaFiltrada.map(function (obj) {
        NovaTag += `
        <li class="card">
        <button class="card-edit-butt" email="${obj.email}">  
             <i class="far fa-edit"></i>
        </button>
        <img src="${obj.avatar}" alt="" class="card-midia">
        <h3>${obj.nome}</h3>
        <h3>${obj.email}</h3>

    </li>`
    })

    sec_listaContato.innerHTML = NovaTag;

    limpaTela();
    criaListenerDeEventos();    
}

function limpaTela() {
    input_nome.value = "";
    input_email.value = "";
    input_avatar.value = "";
}

function criaListenerDeEventos() {
    var htmlcollection = document.getElementsByClassName('card-edit-butt');
    Object.values(htmlcollection).map(el=>{
        let emailElemento = el.getAttribute('email');
        el.addEventListener("click", ()=>preencheTelaPorEmail(emailElemento));
    })
}

function preencheTelaPorEmail(email){
    console.log(email, ListaBase);

    let objetoEncontrado = ListaBase.find(obj=>{
        return obj.email === email
    });

    input_nome.value = objetoEncontrado.nome;
    input_email.value = objetoEncontrado.email;
    input_avatar.value = objetoEncontrado.avatar;
}