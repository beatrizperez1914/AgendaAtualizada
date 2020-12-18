var hamburguer = document.querySelector(".hamburguer");
var btn_adicionar = document.getElementById("but-add");
var input_nome = document.getElementById("input_nome");
var input_email = document.getElementById("input_email");
var input_avatar = document.getElementById("input_avatar");
var sec_listaContato = document.getElementById("lista-contato"); 
var input_pesquisa = document.getElementById("input_pesquisa");


var ListaBase = [
    {nome: 'ito', email:'ito@', avatar: ''},
    {nome: 'bea', email:'bea@', avatar: ''},
    {nome: 'pai', email:'pai@', avatar: ''},
    {nome: 'ito2', email:'ito2@', avatar: ''},

] //lista o cadastro

hamburguer.addEventListener("click", function () {
    var barralat = document.querySelector(".barralat").classList.toggle("show-menu");
});

btn_adicionar.addEventListener("click", function (evento) {
    console.log("passei pela função");
    evento.preventDefault();// nao faz o recarregamento da pagina quando clica no botão 
    var nomeInputado = input_nome.value; //recebe o valor que está na variavel
    var emailInputado = input_email.value;//recebe o valor que está na variavel
    var avatarInputado = input_avatar.value;//recebe o valor que está na variavel
    console.log("passei de novo ");
    ListaBase = ListaBase.filter(obj=>obj.email != emailInputado.value);//filtra a lista base atraves do email
    ListaBase.push({ nome: nomeInputado, email: emailInputado, avatar: avatarInputado }); //"sobe" o nome email e o avatar
    console.log("passei de novo 1", ListaBase);
    
    montaLista();//faz a função de montar a lista 
    console.log("passei de novo ");

});

input_nome.addEventListener("focus", function (evento) {
    evento.target.select(); //adiciona um evento de foco no input nome 
})


function montaLista(lista) {
    var NovaTag = ''; //variavel vazia
    console.log("estou montando a lista")
    lista.map(function (obj) { //lista filtrada onde o map vai passar pelo obj  
        //nova tag vai receber o html 
        NovaTag += getHTMLCard(obj)
    })

    sec_listaContato.innerHTML = NovaTag;//atributo que monta o html

    limpaTela(); //função 
    criaListenerDeEventos();//função    
}

function getHTMLCard(obj){
    return ` 
    <li class="card">
    <button class="card-edit-butt" email="${obj.email}">  
         <i class="far fa-edit"></i>
    </button>
    <button class="card-del-butt" email="${obj.email}">  
         <i class="far fa-edit"></i>
    </button>
    <img src="${obj.avatar}" alt="" class="card-midia">
    <h3>${obj.nome}</h3>
    <h3>${obj.email}</h3>
</li>`
}

function limpaTela() {
    input_nome.value = ""; //o conteudo do input  fica vazio 
    input_email.value = "";//o conteudo do input  fica vazio 
    input_avatar.value = "";//o conteudo do input  fica vazio 
}

function criaListenerDeEventos() {
    var htmlcollection = document.getElementsByClassName('card-edit-butt');//ela "cata " todos que tem essa classe 
    Object.values(htmlcollection).map(el=>{ //objeto tranformado em um array 
        let emailElemento = el.getAttribute('email') //pega na tag o atributo chamado email                                                                                                                                                                                                                                                            
      el.addEventListener("click", ()=>preencheTelaPorEmail(emailElemento)); 
    })
}

function preencheTelaPorEmail(email){
    console.log(email, ListaBase);

    let objetoEncontrado = ListaBase.find(obj=>{ //find = procura 
        return obj.email === email
    });

    input_nome.value = objetoEncontrado.nome;
    input_email.value = objetoEncontrado.email;
    input_avatar.value = objetoEncontrado.avatar;
}


input_pesquisa.addEventListener("keyup", () => {
    if("" === input_pesquisa.value){
        montaLista(ListaBase)
        return;
    }
    
    var bunda = ListaBase.filter((obj) => {
        console.log("input pesquisa",input_pesquisa.value)
        return obj.email.startsWith(input_pesquisa.value);
    })
    console.log("encontrado", bunda)
    montaLista(bunda);
})

montaLista(ListaBase);




//map cria uma nova lista a partir de uma lista 
//startWith começa com... pesquisa quando digita 