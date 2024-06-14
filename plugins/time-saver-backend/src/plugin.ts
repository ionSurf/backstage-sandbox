import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';

/**
 * testPlugin backend plugin
 *
 * @public
 */
export const timeSaverBackendPlugin = createBackendPlugin({
  pluginId: 'time-saver-backend',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
        config: coreServices.rootConfig,
        database: coreServices.database,
        scheduler: coreServices.scheduler,
      },
      async init({
        httpRouter,
        logger,
        config,
        database,
        scheduler
      }) {
        httpRouter.use(
          await createRouter({
            logger,
            config,
            database,
            scheduler
          }),
        );
        httpRouter.addAuthPolicy({
          path: '/health',
          allow: 'unauthenticated',
        });
      },
    });
  },
});
