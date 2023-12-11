import supertest from 'supertest';
import {app} from '../src/app';

describe('Ping', () => {
  it('Ping returns pong', async () => {
    await app.ready();
    await supertest(app.server).get('/ping').expect(200).expect('pong');
  });
});
