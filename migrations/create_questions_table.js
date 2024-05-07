exports.up = function (knex) {
  return knex.schema.createTable("questions", function (table) {
    table.increments("question_id").primary();
    table.string("question").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("questions");
};
