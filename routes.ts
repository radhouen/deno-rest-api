import { Router } from "https://deno.land/std@0.188.0/dotenv/mod.ts";
import {getProducts,getProduct,addProduct,updateProduct,deleteProduct} from "./controllers/products.ts"


const router = new Router();

router.get('/api/v1/products', getProducts)
.get('/api/v1/product/:id', getProduct)
router.post('/api/v1/products', addProduct)
router.put('/api/v1/product/:id', updateProduct)
router.delete('/api/v1/product/:id', deleteProduct);

export default router ;