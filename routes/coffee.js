const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffee-controller");

router.route("/").get(coffeeController.getCoffeeList);

router.route("/:id").get(coffeeController.getCoffeeItem);

module.exports = router;
