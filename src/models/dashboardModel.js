const database = require("../database/config")

function listarMinijogos() {
    const instrucaoSql = `
        SELECT * FROM vw_ranking_minijogos;
        `

    return database.executar(instrucaoSql)
}

function listarErasJogadas() {
    const instrucaoSql = `
        SELECT * FROM vw_eras_jogadas;
        `

    return database.executar(instrucaoSql)
}

function listarParticipacoesDespedida() {
    const instrucaoSql = `
        SELECT * FROM vw_evento_despedida;
        `

    return database.executar(instrucaoSql)
}

function buscarQtdRespostas() {
    const instrucaoSql = `
        SELECT * FROM vw_qtd_respostas;
        `

    return database.executar(instrucaoSql)
}

function buscarIdadeJogadores() {
    const instrucaoSql = `
        SELECT * FROM vw_idade_jogadores;
        `

    return database.executar(instrucaoSql)
}

function buscarPaisJogadores() {
    const instrucaoSql = `
        SELECT * FROM vw_pais_jogadores;
        `

    return database.executar(instrucaoSql)
}

module.exports = {
    listarMinijogos,
    listarErasJogadas,
    listarParticipacoesDespedida,
    buscarQtdRespostas,
    buscarIdadeJogadores,
    buscarPaisJogadores
};