const knex = require("knex")(require("../knexfile"));

const getCoffeeList = async (_req, res) => {
  try {
    const data = await knex("coffee");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(`Error retrieving coffee list: ${error}`);
  }
};

const getCoffeeItem = async (req, res) => {
  try {
    const data = await knex("coffee").where({ id: req.params.id }).first();
    if (!data) {
      res.status(404).json(`Coffee item #${req.params.id} not found`);
      return;
    }
  } catch (error) {
    res.status(400).json(`Error retrieving coffee item: ${error}`);
  }
};

module.exports = {
  getCoffeeList,
  getCoffeeItem,
};
