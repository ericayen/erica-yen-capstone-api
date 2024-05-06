const knex = require("knex")(require("../knexfile"));

const getCommentList = async (_req, res) => {
  try {
    const data = await knex("comments");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json("Error retrieving comments!", error);
  }
};

module.exports = { getCommentList };
