
import { Router } from 'express';
import { userRoute } from '../modules/user/user.route';

export const router = Router();

const moduleRouters = [
  {
    path: '/user',
    route: userRoute,
  },
];

moduleRouters.forEach(route => {
  router.use(route.path, route.route);
});
