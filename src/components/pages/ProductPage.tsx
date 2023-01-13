import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { data } from '../products';
import { IProduct } from '../types';


const ProductPage = (): JSX.Element => {
  type QuizParams = {
    id: string;
  };
  const { id } = useParams<QuizParams>();
  let currentProduct: IProduct | undefined;
  if (id !== undefined) {
    currentProduct = data.products.find((product) => product.id == +id);
  }

  return (
    <div className="product-page">

      <div className="product-page-main">
        {currentProduct && <Product product={currentProduct} />}
      </div>
    </div>
  );
};

export default ProductPage;
