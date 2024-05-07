exports.seed = async function (knex) {
  await knex("coffee").del();
  await knex("coffee").insert([
    {
      coffee_id: 1,
      coffee_type: "Arabica",
      region: "Central America",
      history:
        "Arabica coffee is believed to have originated in the highlands of Ethiopia and spread throughout the Middle East, eventually making its way to Europe and the Americas. Today, it is the most widely cultivated species of coffee in the world and is highly valued for its delicate flavour and aroma.",
      countries: "Guatemala, Honduras, El Salvador, Costa Rica, Panama, Mexico",
      acidity: "moderate",
      flavour: "fruity, sweet",
      roast_profile: "light to medium",
    },
    {
      coffee_id: 2,
      coffee_type: "Arabica",
      region: "South America",
      history:
        "Arabica coffee is believed to have originated in the highlands of Ethiopia and spread throughout the Middle East, eventually making its way to Europe and the Americas. Today, it is the most widely cultivated species of coffee in the world and is highly valued for its delicate flavour and aroma.",
      countries: "Brazil, Colombia, Peru, Ecuador, Bolivia",
      acidity: "low",
      flavour: "nutty, chocolatey",
      roast_profile: "light to medium",
    },
    {
      coffee_id: 3,
      coffee_type: "Arabica",
      region: "East Africa",
      history:
        "Arabica coffee is believed to have originated in the highlands of Ethiopia and spread throughout the Middle East, eventually making its way to Europe and the Americas. Today, it is the most widely cultivated species of coffee in the world and is highly valued for its delicate flavour and aroma.",
      countries: "Ethiopia, Kenya, Tanzania, Uganda, Rwanda, Burundi",
      acidity: "high",
      flavour: "complex, fruity, red fruits, lime, black tea",
      roast_profile: "light to medium",
    },
    {
      coffee_id: 4,
      coffee_type: "Arabica",
      region: "Arabia",
      history:
        "Arabica coffee is believed to have originated in the highlands of Ethiopia and spread throughout the Middle East, eventually making its way to Europe and the Americas. Today, it is the most widely cultivated species of coffee in the world and is highly valued for its delicate flavour and aroma.",
      countries: "Yemen",
      acidity: "high, bright",
      flavour: "spicy, floral",
      roast_profile: "light to medium",
    },
    {
      coffee_id: 5,
      coffee_type: "Arabica",
      region: "Asia",
      history:
        "Arabica coffee is believed to have originated in the highlands of Ethiopia and spread throughout the Middle East, eventually making its way to Europe and the Americas. Today, it is the most widely cultivated species of coffee in the world and is highly valued for its delicate flavour and aroma.",
      countries: "India, Indonesia, Papua New Guinea",
      acidity: "low",
      flavour: "fruity, earthy, spicy, coconut, chocolatey",
      roast_profile: "light to medium",
    },
    {
      coffee_id: 6,
      coffee_type: "Robusta",
      region: "West Africa",
      history:
        "Robusta coffee is native to Central and West Africa and has been cultivated for centuries. It was introduced to other regions, including Asia and Brazil, during the colonial period. Robusta coffee is known for its high caffeine content and strong flavour, and is often used in blends with Arabica coffee to create a stronger, more robust flavour profile.",
      countries: "Ivory Coast, Cameroon, Nigeria",
      acidity: "low",
      flavour: "woody, earthy",
      roast_profile: "dark",
    },
    {
      coffee_id: 7,
      coffee_type: "Robusta",
      region: "Asia",
      history:
        "Robusta coffee is native to Central and West Africa and has been cultivated for centuries. It was introduced to other regions, including Asia and Brazil, during the colonial period. Robusta coffee is known for its high caffeine content and strong flavour, and is often used in blends with Arabica coffee to create a stronger, more robust flavour profile.",
      countries: "Vietnam, Indonesia, India, Thailand",
      acidity: "low",
      flavour: "cereal, nutty, bitter",
      roast_profile: "dark",
    },
    {
      coffee_id: 8,
      coffee_type: "Robusta",
      region: "South America",
      history:
        "Robusta coffee is native to Central and West Africa and has been cultivated for centuries. It was introduced to other regions, including Asia and Brazil, during the colonial period. Robusta coffee is known for its high caffeine content and strong flavour, and is often used in blends with Arabica coffee to create a stronger, more robust flavour profile.",
      countries: "Brazil",
      acidity: "low",
      flavour: "nutty, chocolatey, bitter",
      roast_profile: "dark",
    },
    {
      coffee_id: 9,
      coffee_type: "Liberica",
      region: "West Africa, Central Africa",
      history:
        "Liberica coffee is native to West and Central Africa and was introduced to Southeast Asia during the colonial period. It is a lesser-known species of coffee, but is valued for its unique flavour profile.",
      countries: "Liberia, Sierra Leone",
      acidity: "moderate",
      flavour: "fruity, floral, smoky, woody",
      roast_profile: "medium to dark",
    },
    {
      coffee_id: 10,
      coffee_type: "Excelsa",
      region: "Southeast Asia",
      history:
        "Excelsa coffee is native to Southeast Asia and is a lesser-known species of coffee. It is often used in blends with other coffee varieties to add complexity to the flavour profile.",
      countries: "Vietnam, Cambodia, Thailand",
      acidity: "moderate",
      flavour: "fruity, tart, nutty, floral",
      roast_profile: "medium",
    },
  ]);
};
