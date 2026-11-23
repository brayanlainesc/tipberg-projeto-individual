const dashboardModel = require("../models/dashboardModel");

function listarMinijogos(req, res) {
    dashboardModel.listarMinijogos().then((resultado) => {
        res.status(200).json(resultado);
    })
}

module.exports = {
    listarMinijogos
}