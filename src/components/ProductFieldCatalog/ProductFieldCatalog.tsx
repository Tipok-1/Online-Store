import React from "react";
import Product from "../Product/Product";
import { IProduct } from "../types";
import '../ProductFieldCatalog/ProductFieldCatalog.css'


const ProductFieldCatalog = (props: { products: IProduct[] }): JSX.Element => {
  return (
    <div className='product__field__catalog'>
      {props.products.length
        ? props.products.map(product => {
          return (
            <Product key={product.id} product={product} />
          )
        })
        : <h1 style={{ color: "white" }}>Ничего не найдено</h1>
      }
    </div>
  )
}

export default ProductFieldCatalog;