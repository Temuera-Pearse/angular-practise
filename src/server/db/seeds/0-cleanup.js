exports.seed = async function (knex) {
  await knex("tasks").del();
};
