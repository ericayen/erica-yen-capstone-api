const express = require("express");
const router = express.Router();
const responsesController = require("../controllers/responses-controller");

router.route("/").get(responsesController.getResponsesList);

router.route("/:id").get(responsesController.getResponseItem);

module.exports = router;
