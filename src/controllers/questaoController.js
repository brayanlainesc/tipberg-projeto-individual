const questaoModel = require("../models/questaoModel");

function listar(req, res) {
    questaoModel.listar().then((resultado) => {
        res.status(200).json(resultado);
    })
}

function listarAlternativas(req, res) {
    questaoModel.listarAlternativas().then((resultado) => {
        res.status(200).json(resultado);
    })
}

function responder(req, res) {
    const id = req.params.id
    const usuarioId = req.body.usuarioId
    const alternativaId = req.body.alternativaId

    questaoModel.responder(id, usuarioId, alternativaId).then((resultado) => {
        res.status(201).json(resultado);
    })
}

module.exports = {
    listar,
    listarAlternativas,
    responder
}