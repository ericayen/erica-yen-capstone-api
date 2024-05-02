exports.seed = async function (knex) {
  await knex("questions").del();
  await knex("questions").insert([
    {
      question_id: 1,
      question:
        "Do you prefer bold and strong flavors, or mild and less strong flavors?",
    },
    {
      question_id: 2,
      question:
        "Which flavors do you enjoy more: nutty and chocolatey, fruity and floral, or woody and earthy?",
    },
    {
      question_id: 3,
      question: "How much do you like fruity, acidic tastes?",
    },
    {
      question_id: 4,
      question:
        "Would you prefer a more typical 'coffee' taste, or do you want to try something more unique?",
    },
  ]);
};
