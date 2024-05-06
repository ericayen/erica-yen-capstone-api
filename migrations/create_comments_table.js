exports.up = function (knex) {
  return knex.schema.createTable("comments", function (table) {
    table.uuid("comment_id").primary();
    table.string("name").notNullable();
    table.string("avatar");
    table.text("comment").notNullable();
    table.bigInteger("date").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments");
};
