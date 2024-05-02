const knex = require("knex")(require("../knexfile"));

const filterResults = async (req, res) => {
  try {
    const coffeeCount = {};

    Object.keys(req.body).forEach((key) => {
      const idsArray = req.body[key].coffee_ids.split(",").map(Number);
      idsArray.forEach((id) => {
        coffeeCount[id] = (coffeeCount[id] || 0) + 1;
      });
    });

    console.log(coffeeCount);

    const maxCount = Math.max(...Object.values(coffeeCount));
    const matchedCoffeeIds = Object.keys(coffeeCount).filter(
      (id) => coffeeCount[id] === maxCount
    );

    console.log("Best matched coffee ids:", matchedCoffeeIds);

    const coffeeInfo = [];
    for (const id of matchedCoffeeIds) {
      const response = await knex("coffee").where("coffee_id", id).first();
      coffeeInfo.push(response);
    }

    console.log("Coffee Info:", coffeeInfo);

    res.status(200).json({ results: coffeeInfo });
  } catch (error) {
    res.status(400).json(`Error retrieving results: ${error}`);
  }
};

module.exports = { filterResults };
