import React from 'react';
import ProductFieldCatalog from '../ProductFieldCatalog/ProductFieldCatalog';
import ProductFieldHeader from '../ProductFieldHeader/ProductFieldHeader';
import { IProduct } from '../types';
import '../ProductField/ProductField.css';

export const price = 'price';
export const priceASC = 'price-ASC';
export const priceDESC = 'price-DESC';
export const rating = 'rating';
export const ratingASC = 'rating-ASC';
export const ratingDESC = 'rating-DESC';
export const discountPercentage = 'discountPercentage';
export const discountASC = 'discount-ASC';
export const discountDESC = 'discount-DESC';

const ProductField = (props: { products: IProduct[] }): JSX.Element => {
  const [products, setProducts] = React.useState(props.products);

  React.useEffect(() => {
    setProducts(props.products);
  }, [props.products])

  const [filter, setFilter] = React.useState({ sort: '', query: '' });
  
  const sortedProducts = React.useMemo(() => {
    if (filter.sort) {
      if (filter.sort === priceASC) {
        return [...products].sort((a, b) => a[price] - b[price]);
      }
      if (filter.sort === priceDESC) {
        return [...products].sort((a, b) => b[price] - a[price]);
      }
      if (filter.sort === ratingASC) {
        return [...products].sort((a, b) => a[rating] - b[rating]);
      }
      if (filter.sort === ratingDESC) {
        return [...products].sort((a, b) => b[rating] - a[rating]);
      }
      if (filter.sort === discountASC) {
        return [...products].sort(
          (a, b) => a[discountPercentage] - b[discountPercentage]
        );
      }
      if (filter.sort === discountDESC) {
        return [...products].sort(
          (a, b) => b[discountPercentage] - a[discountPercentage]
        );
      }
    }
    return products;
  }, [filter.sort, products]);

  const searchAndSortedProducts = React.useMemo(() => {
    if (filter.query) {
      return sortedProducts.filter((product: IProduct) =>
        (product.title as string)
          .toLowerCase()
          .startsWith(filter.query.toLowerCase())
      );
    }
    return sortedProducts;
  }, [filter.query, sortedProducts]);

  return (
    <div className="product__field">
      <ProductFieldHeader
        filter={filter}
        setFilter={setFilter}
        found={searchAndSortedProducts.length}
      />
      <ProductFieldCatalog products={searchAndSortedProducts} />
    </div>
  );
};

export default ProductField;
