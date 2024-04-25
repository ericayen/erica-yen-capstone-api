const knex = require("knex")(require("../knexfile"));

const getResponsesList = async (_req, res) => {
  try {
    const data = await knex("responses");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(`Error retrieving response list: ${error}`);
  }
};

const getResponseItem = async (req, res) => {
  try {
    const data = await knex("responses")
      .where({ response_id: req.params.id })
      .first();
    if (!data) {
      res.status(404).json(`Response item #${req.params.id} not found`);
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(`Error retrieving response item: ${error}`);
  }
};

module.exports = {
  getResponsesList,
  getResponseItem,
};
