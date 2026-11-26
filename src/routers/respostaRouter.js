const express = require("express");
const router = express.Router();

const respostaController = require("../controllers/respostaController");

router.get("/listar/:id", function (req, res) {
    respostaController.listar(req, res);
});

module.exports = router;