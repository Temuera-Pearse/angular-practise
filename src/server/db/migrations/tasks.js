exports.up = async function (knex) {
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("text");
    table.string("day");
    table.boolean("reminder");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
