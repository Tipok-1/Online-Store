import React from "react";
import Found from "../Found/Found";
import Product from "../Product/Product";
import '../ProductFieldCatalog/ProductFieldCatalog.css'
import  {data}  from "../products";
import SearchProduct from "../SearchProduct/SearchProduct";
import SortOptions from "../SortOptions/SortOptions";


const ProductFieldCatalog = (): JSX.Element => {

    return (
        <div className='product-field-catalog'>
            {data.products.map(product => {
                return (
                    <Product 
                        key = {product.id}
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