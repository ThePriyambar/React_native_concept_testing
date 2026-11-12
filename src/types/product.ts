export interface Review {
    rating: number;
    comment : string;
    date: string;
    reviewName: string;
    reviewEmail: string;
}
export interface Dimensions{
    width: number;
    height: number;
    depth: number;
}
export interface Product{
    id: number;
    title: string;
    description: string;
    category: string;
    price : number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
    images: string[];
    dimensions: Dimensions;
    reviews: Review[];
}
export interface ProductResponse{
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}