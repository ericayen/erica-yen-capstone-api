const knex = require("knex")(require("../knexfile"));

const filterResults = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(`Error retrieving results: ${error}`);
  }
};

module.exports = { filterResults };
