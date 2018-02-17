/**
 * @param {array de objetos do Ajax} usuario
 * @author Gabriel Oliveira
 * @description Adiciona usuário na Tabela, selecionando um elemento no DOM
 * @returns sem retorno
 */
function adicionarUsuarionaTabela(usuario) {
    let usuarioTr = montaTr(usuario);
    let tabela = document.querySelector('#tabela-usuarios');
    tabela.appendChild(usuarioTr);
}
/**
 * @param {recebe propriedade do objeto} usuario 
 * @author Gabriel Oliveira
 * @description Cria um elemento TR no DOM, para o usuario passado como parametro
 * @returns retorna uma Tr para acoplar na tabela
 */
function montaTr(usuarios) {
    let usuarioTr = document.createElement("tr");
    usuarioTr.appendChild(montarTd(usuarios.id));
    usuarioTr.appendChild(montarTd(usuarios.website));
    return usuarioTr;
}
/**
 * @param {recebe dados do objeto} usuario 
 * @author Gabriel Oliveira
 * @description Cria um elemento TD no DOM, para os dados de usuario passado como parametro
 * @returns retorna uma Td para acoplar na TR
 */
function montarTd(dados) {
    let td = document.createElement('td');
    td.textContent = dados;
    return td;
}
/**
 * @param {recebe parametro de latitude} latitude 
 * @author Gabriel Oliveira
 * @description Funçao Booleana que verifica se o usuario esta no hemisferio SUL
 * @returns true || false
 */
function estaNoEmisferioSul(latitude) {
    return Number.parseFloat(latitude) < 0 ? true : false
}

