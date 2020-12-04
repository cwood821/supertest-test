const request = require('supertest')
const app = require('./server')

describe('Hello route', () => {
    it('returns message', async () => {
      const res = await request(app)
        .get('/api/hello');

      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Hello Test');
    })
})
