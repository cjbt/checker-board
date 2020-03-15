const db = require('../data/dbConfig');

const get = async () => {
  const res = await db('checkers').first();
  return res;
};

const update = async (id, changes) => {
  const res = await db('checkers')
    .where({ id })
    .update(changes);
  return res;
};

module.exports = {
  get,
  update
};
