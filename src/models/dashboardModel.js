const database = require("../database/config")

function listarMinijogos() {
    const instrucaoSql = `
        SELECT * FROM vw_ranking_minijogos;
        `

    return database.executar(instrucaoSql)
}

module.exports = {
    listarMinijogos
};