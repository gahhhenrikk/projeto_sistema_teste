var btnCarregarJson = document.querySelector('#Carregar');
let objeto_http = new XMLHttpRequest();

btnCarregarJson.addEventListener('click', () => {

    let usuariosEmisferioSul = [];
    objeto_http.open("GET", "https://jsonplaceholder.typicode.com/users");
    objeto_http.addEventListener('load', () => {
        if (objeto_http.status == 200) {
            btnCarregarJson.classList.add('esconder');
            let usuarios = JSON.parse(objeto_http.responseText);
            let proucuraUsuario = document.querySelector('#email-query');
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
            console.log("Usuarios do emisferio sul: " + usuariosEmisferioSul +'\n Total de usurios do emisferios sul:' + usuariosEmisferioSul.length);
        } else {
            let erroAjax = document.querySelector('#erroAJAX');
            let paiErroAjax = document.querySelector('.invisivel');
            paiErroAjax.classList.remove('invisivel');
            erroAjax.textContent = `Opa, parece que algo deu errado ao tentar carregar os usuarios, tente novamente mais tarde!`;
        }
    });
    objeto_http.send();
});

