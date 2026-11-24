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

module.exports = {
    listarMinijogos,
    listarErasJogadas,
    listarParticipacoesDespedida
};