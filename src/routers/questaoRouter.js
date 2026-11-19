const express = require("express");
const router = express.Router();

const questaoController = require("../controllers/questaoController");

router.get("/listar", function (req, res) {
    questaoController.listar(req, res);
});

router.get("/listarAlternativas", function (req, res) {
    questaoController.listarAlternativas(req, res);
});

router.post("/responder/:id", function (req, res) {
    questaoController.responder(req, res);
});

module.exports = router;