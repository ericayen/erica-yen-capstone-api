exports.up = function (knex) {
  return knex.schema.createTable("coffee", function (table) {
    table.increments("id").primary();
    table.string("coffee_type").notNullable();
    table.text("history").notNullable();
    table.text("flavor").notNullable();
    table.text("roast_profile").notNullable();
    // table.jsonb("characteristics");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("coffee");
};
