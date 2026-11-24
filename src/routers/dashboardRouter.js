const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

router.get("/minijogos", function (req, res) {
    dashboardController.listarMinijogos(req, res);
});

router.get("/erasJogadas", function (req, res) {
    dashboardController.listarErasJogadas(req, res);
});

router.get("/despedida", function (req, res) {
    dashboardController.listarParticipacoesDespedida(req, res);
});

router.get("/qtdRespostas", function (req, res) {
    dashboardController.buscarQtdRespostas(req, res);
});

router.get("/idadeJogadores", function (req, res) {
    dashboardController.buscarIdadeJogadores(req, res);
});

router.get("/paisJogadores", function (req, res) {
    dashboardController.buscarPaisJogadores(req, res);
});

module.exports = router;