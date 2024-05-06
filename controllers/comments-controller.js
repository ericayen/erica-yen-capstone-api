const knex = require("knex")(require("../knexfile"));

const getCommentList = async (_req, res) => {
  try {
    const data = await knex("comments");
    data.sort((a, b) => b.date - a.date);

    const formattedData = data.map((comment) => {
      const formatDate = (number) => (number < 10 ? "0" + number : number);
      const today = new Date(comment.date);
      const year = today.getFullYear();
      const month = formatDate(today.getMonth() + 1);
      const day = formatDate(today.getDate());
      const date = `${year}/${month}/${day}`;

      return {
        ...comment,
        date: date,
      };
    });

    res.status(200).json(formattedData);
  } catch (error) {
    res.status(400).json("Error retrieving comments!", error);
  }
};

const addComment = async (req, res) => {
  const { comment_id, name, comment, date, avatar } = req.body;

  try {
    const newComment = await knex("comments").insert({
      comment_id,
      name,
      avatar,
      comment,
      date,
    });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json("Error adding comment!", error);
  }
};

module.exports = { getCommentList, addComment };
