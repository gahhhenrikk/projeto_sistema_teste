/**
 * @name Seleçao do DOM
 */
let btnCarregarJson = document.querySelector('#Carregar');
let proucuraUsuario = document.querySelector('#email-query');
let contaHemisferioSul = document.querySelector('#hemisferio-query');
let erroAjax = document.querySelector('#erroAJAX');
let paiErroAjax = document.querySelector('.invisivel');
/**
 * @name Objetos e Arrays
 */
let objeto_http = new XMLHttpRequest();
let usuariosEmisferioSul = [];
/**
 * @event Eventos de Click e Ajax
 */
btnCarregarJson.addEventListener('click', () => {
    objeto_http.open("GET", "https://jsonplaceholder.typicode.com/users");
    objeto_http.addEventListener('load', () => {
        if (objeto_http.status == 200) {
            btnCarregarJson.classList.add('esconder');
            let usuarios = JSON.parse(objeto_http.responseText);
            usuarios.forEach(usuario => {
                if (usuario.username == 'Samantha') {
                    console.log(usuario)
                    proucuraUsuario.value = usuario.email;
                }
                adicionarUsuarionaTabela(usuario);
                if (estaNoEmisferioSul(usuario.address.geo.lat)) {
                    usuariosEmisferioSul.push(usuario);
                }
            });
            contaHemisferioSul.value = usuariosEmisferioSul.length;
        } else {
            paiErroAjax.classList.remove('invisivel');
            erroAjax.textContent = `Opa, parece que algo deu errado ao tentar carregar os usuarios, tente novamente mais tarde!`;
        }
    });
    objeto_http.send();
});

