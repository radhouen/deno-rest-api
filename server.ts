/**import { Application } from "https://deno.land/std@0.188.0/dotenv/mod.ts";*/
import * as mod from "https://deno.land/std@0.190.0/dotenv/mod.ts";
import router from './routes.ts';

const app = new Application();
const port = 8000 
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running in port ${port}`);
await app.listen({ port });