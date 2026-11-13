import {Product} from '../types/product'

// Map: Extract product titles
export const getProductTitles = (products: Product[]) => {
    return products.map(item => item.title)
}
// Filter: Get products above the price 

export const getExpensiveProducts = (products: Product[]) => {
    return products.filter(item => item.price > 100);
}

// Find : find a products by id 

export const findproduct = (
    products: Product[],
    id : number,
) => {
    return products.find(item => item.id === id);
}
// Reduce : Calculate total price

export const getTotalprice = (products: Product[]) => {
    return products.reduce(
        (total, item) => total + item.price, 0,
    )
}

// Sort : Sort products by price 

export const sortByPrice = (products: Product[]) => {
    return [...products].sort(
        (a, b) => a.price - b.price
    )
}
// Check if any product is out of stock 

export const hasOutOfStock = (products: Product[]) => {
    return products.some(item => item.stock === 0);

}
// Every : Check if all the products have rating 

export const allHavingRating = (products: Product[]) => {
    return products.every(item => item.rating > 0)
}
// FlatMap : Extract all Reviews 

export const getAllReviews = (products: Product[]) => {
    return products.flatMap(item => item.reviews);
};

//SlICE: gET FIRST fIVE PRODUCTS 

export const getFirstFive = (products: Product[]) => {
    return products.slice(0, 5);
};
// INCLUDES: Check Catogery 
export const hasCatogery = (
    products : Product[],
    category: string,
) => {
    return products
    .map(item => item.category)
    .includes(category);
}

// Cahininng Filter , sort , and map 

export const getAffordableProductNames = (
    products: Product[],
) => {
    return products
    .filter(item => item.price > 100)
    .sort((a,b) => a.price - b.price)
    .map(item => item.title)
}