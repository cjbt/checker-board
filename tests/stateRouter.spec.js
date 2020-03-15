const request = require('supertest');
const server = require('../server');

const ENDPOINT = '/api/state';

describe('state router', () => {
  it('should get all', async () => {
    const res = await request(server).get(`${ENDPOINT}`);

    expect(res.status).toBe(200);
  });

  it('should return 422 if state is not sent', async () => {
    const res = await request(server)
      .post(`${ENDPOINT}`)
      .send({});

    expect(res.status).toBe(422);
  });

  it('should return 200 if updated succesfully', async () => {
    const res = await request(server)
      .post(`${ENDPOINT}`)
      .send({
        state: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 1, 0, 1, 0, 1],
          [1, 0, 1, 0, 1, 0, 1, 0],
          [0, 1, 0, 1, 0, 1, 0, 1]
        ]
      });

    expect(res.status).toBe(200);
  });
});
