const database = require("../database/config")

function listar() {
    const instrucaoSql = `
        SELECT * FROM questao;
        `

    return database.executar(instrucaoSql)
}

function listarAlternativas() {
    const instrucaoSql = `
        SELECT
            a.*,
            q.numero AS num_questao
        FROM alternativa a
        JOIN questao q ON a.questao_id = q.id
        ORDER BY a.letra;
        `

    return database.executar(instrucaoSql)
}

function responder(id, usuarioId, alternativaId) {
    const instrucaoSql = `
        INSERT INTO resposta (questao_id, usuario_id, alternativa_id) VALUE
            (${id}, ${usuarioId}, ${alternativaId});
        `

    return database.executar(instrucaoSql)
}

module.exports = {
    listar,
    listarAlternativas,
    responder
};