exports.up = function (knex) {
  return knex.schema.createTable("questions", function (table) {
    table.increments("id").primary();
    table.string("question").notNullable();
    table.string("type").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("questions");
};
