import React from "react";
import Product from "../Product/Product";
import '../ProductFieldCatalog/ProductFieldCatalog.css'
import { data } from "../products";


const ProductFieldCatalog = (props): JSX.Element => {

    return (
        <div className='product-field-catalog'>
            {data.products.map(product => {
                return (
                    <Product 
                        title={product.title} 
                        category={product.category}
                        brand={product.brand}
                        price={product.price}
                        discountPercentage={product.discountPercentage}
                        rating={product.rating}
                        stock={product.stock}
                        thumbnail={product.thumbnail}
                        id={product.id}
                    />
                )
            })}
        </div>
    )
}

export default ProductFieldCatalog;