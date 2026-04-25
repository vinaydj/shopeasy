const request = require('supertest');
const {app, server} = require('../app');

describe('GET /', () => {
  it('should return 200 status code and correct message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello Shopeasy from Express!');
    });
});

afterAll(() => {
  server.close(); // Close the server after all tests are done
});
