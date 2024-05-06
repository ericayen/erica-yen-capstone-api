const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments-controller");

router.route("/").get(commentsController.getCommentList);

module.exports = router;
