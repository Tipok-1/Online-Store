import React, { useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { IProduct } from '../types';
import { Store } from '../App';
import '../Product/Product.css';

interface IPropsProduct {
  product: IProduct;
}

const Product = ({ product }: IPropsProduct): JSX.Element => {
  const {
    title,
    category,
    brand,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    id,
  } = product;

  const router = useNavigate();
  const [store, setStore] = useContext(Store)!;
  const location = useLocation();

  const isBusketProduct = () => store.products.includes(product);

  const hundred = '100%';

  const addProduct = () => {
    setStore({
      ...store,
      products: [...store.products, product],
    });
  };

  const removeProduct = () => {
    const newBasketProducts = store.products.filter(
      (p: IProduct) => p !== product
    );
    setStore({
      ...store,
      products: newBasketProducts,
    });
  };

  return (
    <div
      className="product"
      style={{
        backgroundImage: `url(${thumbnail})`,
        width:
          isBusketProduct() && location.pathname === '/basket'
            ? '100%'
            : '',
      }}
    >
      <p className="product__header">{title}</p>
      <div className="product__description">
        <p>Category: {category}</p>
        <p>Brand: {brand}</p>
        <p>Price: {price}</p>
        <p>Discount: {discountPercentage}</p>
        <p>Rating: {rating}</p>
        <p>Stock: {stock}</p>
      </div>
      <div className="product__btns">
        {isBusketProduct() ? (
          <button
            className="btn btn-primary"
            onClick={() => removeProduct()}
          >
            DROP FROM CARD
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => addProduct()}
          >
            ADD TO CARD
          </button>
        )}

        <button
          className="btn btn-primary"
          onClick={() => router(`/product/${id}`)}
        >
          DETAILS
        </button>
      </div>
    </div>
  );
};

export default React.memo(Product);
