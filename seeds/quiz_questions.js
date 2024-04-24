exports.seed = async function (knex) {
  await knex("quiz_questions").del();
  await knex("quiz_questions").insert([
    {
      id: 1,
      question:
        "Do you prefer bold and strong flavors, or mild and less strong flavors?",
      type: "coffee",
    },
    {
      id: 2,
      question:
        "Which flavors do you enjoy more: nutty and chocolatey, or fruity and floral?",
      type: "coffee",
    },
    {
      id: 3,
      question:
        "Do you enjoy smoky and woody flavors? If you enjoy BBQs, then the answer is most likely yes!",
      type: "coffee",
    },
    {
      id: 4,
      question: "How much do you like citrus fruits and berries?",
      type: "coffee",
    },
    {
      id: 5,
      question:
        "Would you prefer a more typical 'coffee' taste, or do you want to try something more unique?",
      type: "coffee",
    },
    // {
    //   id: 6,
    //   question: "",
    //   type: "",
    // },
    // {
    //   id: 7,
    //   question: "",
    //   type: "",
    // },
    // {
    //   id: 8,
    //   question: "",
    //   type: "",
    // },
    // {
    //   id: 9,
    //   question: "",
    //   type: "",
    // },
    // {
    //   id: 10,
    //   question: "",
    //   type: "",
    // },
    // {
    //   id: 11,
    //   question: "",
    //   type: "",
    // },
    // {
    //   id: 12,
    //   question: "",
    //   type: "",
    // },
  ]);
};
