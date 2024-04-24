const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questions-controller");

router.route("/").get(questionsController.getQuizList);

router.route("/:id").get(questionsController.getQuizItem);

module.exports = router;
