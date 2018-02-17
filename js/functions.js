/**
 * 
 * @param {array de objetos Ajax} usuario 
 */

function adicionarUsuarionaTabela(usuario) {
    let usuarioTr = montaTr(usuario);
    let tabela = document.querySelector('#tabela-usuarios');
    tabela.appendChild(usuarioTr);
}
function montaTr(usuarios) {
    let usuarioTr = document.createElement("tr");
    usuarioTr.appendChild(montarTd(usuarios.id));
    usuarioTr.appendChild(montarTd(usuarios.website));
    return usuarioTr;
}

function montarTd(dados) {
    let td = document.createElement('td');
    td.textContent = dados;
    return td;
}

function estaNoEmisferioSul(latitude) {
    return Number.parseFloat(latitude) < 0 ? true : false
}

