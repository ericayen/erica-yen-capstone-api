exports.seed = async function (knex) {
  await knex("coffee").del();
  await knex("coffee").insert([
    {
      id: 1,
      coffee_type: "Arabica",
      history:
        "Arabica coffee is believed to have originated in the highlands of Ethiopia and spread throughout the Middle East, eventually making its way to Europe and the Americas. Today, it is the most widely cultivated species of coffee in the world and is highly valued for its delicate flavor and aroma.",
      flavor:
        "Fruity and sweet with moderate acidity (Central America); nutty and chocolatey with mild acidity (South America); complex with notes of red fruits, lime, and black tea (East Africa); spicy and floral with bright acidity (Arabia); earthy and spicy with coconut and chocolate notes (Asia)",
      roast_profile: "light to medium",
      // brewing_methods: [
      //   "drip",
      //   "pour-over",
      //   "French-press",
      //   "espresso",
      //   "cold-brew",
      // ],
    },
    {
      id: 2,
      coffee_type: "Robusta",
      history:
        "Robusta coffee is native to Central and West Africa and has been cultivated for centuries. It was introduced to other regions, including Asia and Brazil, during the colonial period. Robusta coffee is known for its high caffeine content and strong flavor, and is often used in blends with Arabica coffee to create a stronger, more robust flavor profile.",
      flavor:
        "Woody and earthy with low acidity (West Africa); cereal and nutty with pronounced bitterness (Asia); chocolatey and nutty with low acidity and pronounced bitterness (Brazil)",
      roast_profile: "dark",
      // brewing_methods: ["espresso", "moka-pot"],
    },
    {
      id: 3,
      coffee_type: "Liberica",
      history:
        "Liberica coffee is native to West and Central Africa and was introduced to Southeast Asia during the colonial period. It is a lesser-known species of coffee, but is valued for its unique flavor profile.",
      flavor: "Fruity and floral with a smoky aroma and woody notes",
      roast_profile: "medium to dark",
      // brewing_methods: ["drip", "pour-over", "French-press"],
    },
    {
      id: 4,
      coffee_type: "Excelsa",
      history:
        "Excelsa coffee is native to Southeast Asia and is a lesser-known species of coffee. It is often used in blends with other coffee varieties to add complexity to the flavor profile.",
      flavor: "Fruity and tart with a nutty and floral aroma",
      roast_profile: "medium",
      // brewing_methods: ["drip", "pour-over", "French-press"],
    },
  ]);
};
