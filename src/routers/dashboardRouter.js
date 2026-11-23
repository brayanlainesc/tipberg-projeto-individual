const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

router.get("/minijogos", function (req, res) {
    dashboardController.listarMinijogos(req, res);
});

module.exports = router;