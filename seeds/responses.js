exports.seed = async function (knex) {
  await knex("responses").del();
  await knex("responses").insert([
    {
      response_id: 1,
      question_id: 1,
      option: "mild",
      coffee_ids: "1,2,3,4,5",
    },
    {
      response_id: 2,
      question_id: 1,
      option: "medium",
      coffee_ids: "1,2,3,4,5,9,10",
    },
    {
      response_id: 3,
      question_id: 1,
      option: "bold",
      coffee_ids: "6,7,8,9",
    },
    {
      response_id: 4,
      question_id: 2,
      option: "fruity, floral",
      coffee_ids: "1,3,4,5,9,10",
    },
    {
      response_id: 5,
      question_id: 2,
      option: "nutty, chocolatey",
      coffee_ids: "2,5,7,8,10",
    },
    {
      response_id: 6,
      question_id: 2,
      option: "woody, earthy",
      coffee_ids: "5,6,9",
    },
    {
      response_id: 7,
      question_id: 3,
      option: "not really",
      coffee_ids: "2,5,6,7,8",
    },
    {
      response_id: 8,
      question_id: 3,
      option: "they're ok",
      coffee_ids: "1,9,10",
    },
    {
      response_id: 9,
      question_id: 3,
      option: "love them!",
      coffee_ids: "3,4",
    },
    {
      response_id: 10,
      question_id: 4,
      option: "typical",
      coffee_ids: "1,2,3,4,5,6,7,8",
    },
    {
      response_id: 11,
      question_id: 4,
      option: "unique",
      coffee_ids: "9,10",
    },
  ]);
};
