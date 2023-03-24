import { FastifyPluginAsync } from 'fastify';
import { join } from 'path';

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get('/*', async (req, reply) => {
      return reply.sendFile('index.html');
    });
    fastify.get('/js/*', async (req, reply) => {
      const params = req.params as { '*': string };
      return reply.sendFile(join('js', params['*']));
    });
    fastify.get('/css/*', async (req, reply) => {
      const params = req.params as { '*': string };
      return reply.sendFile(join('css', params['*']));
    });
    fastify.get('/images/*', async (req, reply) => {
      const params = req.params as { '*': string };
      return reply.sendFile(join('images', params['*']));
    });
}
export default root;
