const database = require("../database/config")

function listar() {
    const instrucaoSql = `
        SELECT * FROM pais
        ORDER BY nome;
        `

    return database.executar(instrucaoSql)
}

module.exports = {
    listar
};