exports.seed = async function (knex) {
  await knex("responses").del();
  await knex("responses").insert([
    {
      response_id: 1,
      question_id: 1,
      option: "light",
      weight: 1,
    },
    {
      response_id: 2,
      question_id: 1,
      option: "medium",
      weight: 3,
    },
    {
      response_id: 3,
      question_id: 1,
      option: "dark",
      weight: 5,
    },
    {
      response_id: 4,
      question_id: 2,
      option: "fruity, floral",
      weight: 1,
    },
    {
      response_id: 5,
      question_id: 2,
      option: "nutty, chocolatey",
      weight: 3,
    },
    {
      response_id: 6,
      question_id: 2,
      option: "woody, earthy",
      weight: 5,
    },
    {
      response_id: 7,
      question_id: 3,
      option: "smoky",
      weight: 8,
    },
    {
      response_id: 8,
      question_id: 4,
      option: "low",
      weight: 1,
    },
    {
      response_id: 9,
      question_id: 4,
      option: "moderate",
      weight: 3,
    },
    {
      response_id: 10,
      question_id: 4,
      option: "high",
      weight: 5,
    },
    {
      response_id: 11,
      question_id: 5,
      option: "typical",
      weight: 1,
    },
    {
      response_id: 12,
      question_id: 5,
      option: "unique",
      weight: 8,
    },
  ]);
};
