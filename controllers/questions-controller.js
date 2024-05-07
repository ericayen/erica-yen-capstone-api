const knex = require("knex")(require("../knexfile"));

const getQuizList = async (_req, res) => {
  try {
    const data = await knex("questions");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(`Error retrieving quiz questions list: ${error}`);
  }
};

const getQuizItem = async (req, res) => {
  try {
    const data = await knex("questions").where({ id: req.params.id }).first();
    if (!data) {
      res.status(404).json(`Quiz item #${req.params.id} not found`);
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(`Error retrieving quiz item: ${error}`);
  }
};

module.exports = {
  getQuizList,
  getQuizItem,
};
