exports.seed = async function (knex) {
  await knex("questions").del();
  await knex("questions").insert([
    {
      question_id: 1,
      question:
        "Do you prefer bold and strong flavors, or mild and less strong flavors?",
      type: "coffee",
    },
    {
      question_id: 2,
      question:
        "Which flavors do you enjoy more: nutty and chocolatey, fruity and floral, or woody and earthy?",
      type: "coffee",
    },
    {
      question_id: 3,
      question:
        "Do you enjoy smoky flavors? If you enjoy BBQs, then the answer is most likely yes!",
      type: "coffee",
    },
    {
      question_id: 4,
      question: "How much do you like citrus fruits and berries?",
      type: "coffee",
    },
    {
      question_id: 5,
      question:
        "Would you prefer a more typical 'coffee' taste, or do you want to try something more unique?",
      type: "coffee",
    },
    // {
    //   question_id: 6,
    //   question: "",
    //   type: "",
    // },
    // {
    //   question_id: 7,
    //   question: "",
    //   type: "",
    // },
    // {
    //   question_id: 8,
    //   question: "",
    //   type: "",
    // },
    // {
    //   question_id: 9,
    //   question: "",
    //   type: "",
    // },
    // {
    //   question_id: 10,
    //   question: "",
    //   type: "",
    // },
    // {
    //   question_id: 11,
    //   question: "",
    //   type: "",
    // },
    // {
    //   question_id: 12,
    //   question: "",
    //   type: "",
    // },
  ]);
};
