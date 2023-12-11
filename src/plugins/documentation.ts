import {FastifyInstance} from 'fastify';
import {fastifyPlugin} from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

export const documentation = fastifyPlugin((fastify: FastifyInstance, _: unknown, done: () => void) => {
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Api Spec',
        version: '1',
      },
      components: {
        securitySchemes: {
          apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
          },
        },
      },
      security: [{apiKeyAuth: []}],
    },
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: '/api-docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
      displayOperationId: true,
      displayRequestDuration: true,
      showExtensions: true,
      filter: true,
      layout: 'BaseLayout',
      syntaxHighlight: {
        activate: true,
        theme: 'nord',
      },
      persistAuthorization: true,
    },
    initOAuth: {
      useBasicAuthenticationWithAccessCodeGrant: false,
      usePkceWithAuthorizationCodeGrant: true,
    },
    logLevel: 'error',
    staticCSP: true,
  });

  done();
});
