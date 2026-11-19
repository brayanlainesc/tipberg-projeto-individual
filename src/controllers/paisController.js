const paisModel = require("../models/paisModel");

function listar(req, res) {
    paisModel.listar().then((resultado) => {
        res.status(200).json(resultado);
    })
}

module.exports = {
    listar
}