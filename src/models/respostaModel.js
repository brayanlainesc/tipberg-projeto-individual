const database = require("../database/config")

function listar(id) {
    const instrucaoSql = `
        SELECT * FROM resposta
        WHERE usuario_id = ${id};
        `

    return database.executar(instrucaoSql)
}

module.exports = {
    listar
};