const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/buscarUsuarios", function (req, res) {
    usuarioController.buscarUsuarios(req, res);
});

module.exports = router;