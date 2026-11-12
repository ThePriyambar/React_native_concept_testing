import {ProductResponse , Product} from '../types/product';

const BASE_URL = 'https://dummyjson.com';

export const getProducts = async (
    limit: number = 10,
    skip: number = 0,

): Promise<ProductResponse> => {

    const response = await fetch(
        `${BASE_URL}/products?limit=${limit}&skip=${skip}`,
    )

    if(!response.ok){
        throw new Error('API Error: ${response.status}');

    }
    const data: ProductResponse = await response.json();
     return data;
}

// search product by title \

export const searchProduct = async (
query : string,
): Promise<ProductResponse> => {
    const response = await fetch(
        `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`,
    );
    if(!response.ok){
        throw new Error('search Error: ${response.status}');
    }
    return response.json();
}

//Get products by catogery 
export const getProductByCatogery = async (
    catogery : string,
): Promise<ProductResponse> => {
    const response = await fetch('${BASE_URL}/products/category/${encodeURIComponent(category)}'

    )
    if(!response.ok){
        throw new Error('catogery Error: ${response.status}');
    }
    return response.json();
}