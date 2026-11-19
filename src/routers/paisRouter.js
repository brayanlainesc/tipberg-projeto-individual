const express = require("express");
const router = express.Router();

const paisController = require("../controllers/paisController");

router.get("/listar", function (req, res) {
    paisController.listar(req, res);
});

module.exports = router;