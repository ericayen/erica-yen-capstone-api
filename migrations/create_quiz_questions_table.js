exports.up = function (knex) {
  return knex.schema.createTable("quiz_questions", function (table) {
    table.increments("id").primary();
    table.string("question");
    table.string("type");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("quiz_questions");
};
