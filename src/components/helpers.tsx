import { IProduct } from './types';

export const categoriesCategory = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'lighting',
];

export const countAllPrice = (products: IProduct[]): number => {
    let totalPrice = products.reduce((sum: number, product: IProduct) => {
        return sum + product.price;
    }, 0);
    return totalPrice;
};
