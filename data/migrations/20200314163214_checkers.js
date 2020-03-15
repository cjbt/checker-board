exports.up = function(knex) {
  return knex.schema.createTable('checkers', tbl => {
    tbl.increments('id');
    tbl.json('state').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('checkers');
};
