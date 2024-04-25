exports.up = function (knex) {
  return knex.schema.createTable("responses", function (table) {
    table.increments("response_id").primary();
    table.integer("question_id").unsigned().notNullable();
    table.foreign("question_id").references("question_id").inTable("questions");
    table.string("option").notNullable();
    table.integer("weight").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("responses");
};
