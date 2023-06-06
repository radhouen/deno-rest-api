/**import { Application, router } from "https://deno.land/x/oak/mod.ts";
//#region import router from './routes.ts';

const app = new Application();
//#region const port = 8000 
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running in port ${port}`);
app.listen({ port: 8000 });*/

import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });