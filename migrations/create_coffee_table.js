exports.up = function (knex) {
  return knex.schema.createTable("coffee", function (table) {
    table.increments("coffee_id").primary();
    table.string("coffee_type").notNullable();
    table.text("region").notNullable();
    table.text("history").notNullable();
    table.text("countries").notNullable();
    table.string("acidity").notNullable();
    table.text("flavour").notNullable();
    table.text("roast_profile").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("coffee");
};
