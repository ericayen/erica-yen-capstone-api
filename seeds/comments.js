const { v4: uuidv4 } = require("uuid");

exports.seed = async function (knex) {
  await knex("comments").del();
  await knex("comments").insert([
    {
      comment_id: uuidv4(),
      name: "Jane Doe",
      avatar:
        "https://img.daisyui.com/tailwind-css-component-profile-3@56w.png",
      comment:
        "wow, I never knew there were so many different types of coffee!",
      date: "1710247673000",
    },
    {
      comment_id: uuidv4(),
      name: "John Deer",
      avatar:
        "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png",
      comment: "This comment section is a nice touch!",
      date: "1714199873000",
    },
    {
      comment_id: uuidv4(),
      name: "Joan Fawn",
      avatar:
        "https://img.daisyui.com/tailwind-css-component-profile-4@56w.png",
      comment: "I'm excited to try out some new beans!",
      date: "1714673573000",
    },
  ]);
};
