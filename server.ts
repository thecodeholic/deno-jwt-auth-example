import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {login, auth, guest} from './routes.ts'
import authMiddleware from './authMiddleware.ts';

const router = new Router();

router
  .post('/login', login)
  .get('/guest', guest)
  .get('/auth', authMiddleware,  auth) // Registering authMiddleware for /auth endpoint only
  ;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8000});
console.log("Started on port: 8000");