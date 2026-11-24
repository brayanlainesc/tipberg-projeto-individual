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

module.exports = router;