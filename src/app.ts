import path from 'path';
import fastify from 'fastify';
import fastifyHelmet from '@fastify/helmet';
import {fastifyAutoload} from '@fastify/autoload';

import {documentation} from './plugins/documentation';

export const app = fastify({
  logger: true,
});

app.register(fastifyHelmet);
app.register(documentation);

app.register(fastifyAutoload, {
  dir: path.join(process.cwd(), 'src', 'routes'),
});
