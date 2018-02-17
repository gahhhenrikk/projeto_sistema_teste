//console.log('indexjs carregado!');
/*
 * Elementos do DOM 
*/
let nome = document.querySelector('#nome_principal');
let btnCarregarJson = document.querySelector('#Carregar');
let erroAjax = document.querySelector('#erroAJAX');

console.log(btnCarregarJson);
console.log(erroAjax);

/**
 * Logica de carregar JSON
 */
let objeto_http = new XMLHttpRequest();

btnCarregarJson.addEventListener('click',()=>{
    //alert('boto clicado!');
    objeto_http.open("GET","https://jsonplaceholder.typicode.com/users");
    objeto_http.addEventListener('load',()=>{
        if(objeto_http.status == 200){
            //console.log('conexao feita');
            ///console.log(objeto_http.responseText);
            //console.log(typeof `Tipo da resposta antes: ${objeto_http.responseText}`);
            let usuarios = JSON.parse(objeto_http.responseText);
        }else{
            //console.log(objeto_http.status == 400);
            erroAjax.textContent = `Opa, parece que algo deu errado ao tentar carregar os usuarios, tente novamente mais tarde!`;
        }
    });
    objeto_http.send();

});
