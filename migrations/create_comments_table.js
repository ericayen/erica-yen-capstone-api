exports.up = function (knex) {
  return knex.schema.createTable("comments", function (table) {
    table.increments("comment_id").primary();
    table.string("name").notNullable();
    table.text("comment").notNullable();
    table.string("date").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments");
};
