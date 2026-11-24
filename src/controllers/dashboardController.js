const dashboardModel = require("../models/dashboardModel");

function listarMinijogos(req, res) {
    dashboardModel.listarMinijogos().then((resultado) => {
        res.status(200).json(resultado);
    })
}

function listarErasJogadas(req, res) {
    dashboardModel.listarErasJogadas().then((resultado) => {
        res.status(200).json(resultado);
    })
}

function listarParticipacoesDespedida(req, res) {
    dashboardModel.listarParticipacoesDespedida().then((resultado) => {
        res.status(200).json(resultado);
    })
}

module.exports = {
    listarMinijogos,
    listarErasJogadas,
    listarParticipacoesDespedida
}