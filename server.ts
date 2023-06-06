import { Application, router } from "https://deno.land/x/oak/mod.ts";
//#region import router from './routes.ts';

const app = new Application();
const port = 8000 
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running in port ${port}`);
await app.listen({ port });