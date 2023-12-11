import {FastifyInstance} from 'fastify';

export default (fastify: FastifyInstance, _: unknown, done: () => void) => {
  fastify.get('/ping', async () => {
    return 'pong';
  });

  done();
};
