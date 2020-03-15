const db = require('../data/dbConfig');
const state = require('../models/stateModel');

beforeEach(async () => {
  // Re-seed before all tests to ensure that each test will work with a clean set of data
  await db.seed.run();
});
afterAll(async () => {
  // Re-seed after all tests in this test suite to ensure that the next test suite will work with a clean set of data
  await db.seed.run();
  await db.destroy(); // Necessary to prevent connections from not closing (which could eventually clog the Postgres database if left unchecked)
});

const inSeed = {
  id: 1,
  state: JSON.stringify([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1]
  ])
};

const newState = {
  id: 1,
  state: JSON.stringify([
    [2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1]
  ])
};

describe('state models', () => {
  it('should get the state | GET', async () => {
    const res = await state.get();

    expect(res).toEqual(inSeed);
    expect(typeof res.state).toBe('string');
  });

  it('should update the state | PUT', async () => {
    const res = await state.update(1, { state: newState.state });
    const updated = await state.get();

    expect(res).toBe(1);
    expect(updated).toEqual(newState);
  });
});
