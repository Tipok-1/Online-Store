import React from "react";
import Found from "../Found/Found";
import Product from "../Product/Product";
import '../ProductFieldCatalog/ProductFieldCatalog.css'
import { data } from "../products";
import SearchProduct from "../SearchProduct/SearchProduct";
import SortOptions from "../SortOptions/SortOptions";


const ProductFieldCatalog = () => {

    // const getProducts = data.products.map(product => product.title)
    // console.log(getProducts);


    //get data, mapping , props
    return (
        <div className='product-field-catalog'>
            {data.products.map(product => {
                return (
                    <Product 
                        title={product.title} 
                        category={product.category}
                        brand={product.brand}
                        price={product.price}
                        discount={product.discountPercentage}
                        rating={product.rating}
                        stock={product.stock}
                        thumbnail={product.thumbnail}
                    />
                )
            })}
        </div>
    )
}

export default ProductFieldCatalog;