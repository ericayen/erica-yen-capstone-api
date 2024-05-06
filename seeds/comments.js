exports.seed = async function (knex) {
  await knex("comments").del();
  await knex("comments").insert([
    {
      comment_id: 1,
      name: "Jane Doe",
      comment:
        "wow, I never knew there were so many different types of coffee!",
      date: "2024/03/12",
    },
    {
      comment_id: 2,
      name: "John Deer",
      comment: "This comment section is a nice touch!",
      date: "2024/04/27",
    },
    {
      comment_id: 3,
      name: "Joan Fawn",
      comment: "I'm excited to try out some new beans!",
      date: "2024/05/06",
    },
  ]);
};
