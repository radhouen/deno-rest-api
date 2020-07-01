import { v4 } from "https://deno.land/std/uuid/mod.ts";


import { Product } from '../models/product.ts'


let products: Product[] = [
    {
        id: "1",
        name: "Product one",
        description: "it is the first product ",
        price: 10
    },
    {
        id: "2",
        name: "Product two",
        description: "it is the first product ",
        price: 12
    },
    {
        id: "3",
        name: "Product three",
        description: "it is the first product ",
        price: 100
    },
    {
        id: "4",
        name: "Product four",
        description: "it is the first product ",
        price: 13
    },
    {
        id: "5",
        name: "Product five",
        description: "it is the first product ",
        price: 10
    }
];

const getProducts = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: products
    }
}
// @dec get product by id
// @route GET  /api/v1/product/:id
const getProduct = ({ params, response }: { params: { id: string }, response: any }) => {

    const product: Product | undefined = products.find(p => p.id === params.id);
    if (product) {
        response.status = 200
        response.body = {
            success: true,
            data: product

        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: "Product not founds",
        }
    }
}
const deleteProduct = ({ params, response }: { params: { id: string }, response: any } ) => {

products = products.filter(p => p.id !== params.id);
response.body = {
    success: true,
    msg: "Product deleted"
}

}
const addProduct = async ({ request, response }: { request: any, response: any }) => {    
    const body = await request.body()

    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            msg: 'No data'
        }
    } else {
        const product: Product = body.value
        product.id = v4.generate()
        products.push(product)
        response.status = 201
        response.body = {
            success: true,
            data: product
        }
    }
}

const updateProduct = async ({ params, request, response }: { params: { id: string }, request: any, response: any }) => {

    const product: Product | undefined = products.find(p => p.id === params.id);
    if (product) {
        const body = await request.body();
        const updatedData: {
            name?: string;
            description?: string;
            price?: number
        } = body.value;

        products = products.map(p => p.id === params.id ? { ...p, ...updatedData } : p);
        response.status = 200;
        response.body = {
            success: true,
            data: products
        }
    } else {
        response.status = 404;
        response.body = {
            success: false,
            msg: " No products founds/ doesnt exist "
        }
    }

}

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct }