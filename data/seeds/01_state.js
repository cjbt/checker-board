const data = JSON.stringify([
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1]
]);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('checkers')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('checkers').insert([{ id: 1, state: data }]);
    });
};
