const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments-controller");

router
  .route("/")
  .get(commentsController.getCommentList)
  .post(commentsController.addComment);

module.exports = router;
