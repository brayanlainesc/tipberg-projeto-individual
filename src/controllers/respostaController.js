const respostaModel = require("../models/respostaModel");

function listar(req, res) {
    const id = req.params.id;
    
    respostaModel.listar(id).then((resultado) => {
        res.status(200).json(resultado);
    })
}

module.exports = {
    listar
}