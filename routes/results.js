const express = require("express");
const router = express.Router();
const quizController = require("../controllers/results-controller");

router.route("/").post(quizController.filterResults);

module.exports = router;
