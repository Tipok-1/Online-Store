import React, { useState } from "react";
import Found from "../Found/Found";
import Product from "../Product/Product";
import '../ProductFieldCatalog/ProductFieldCatalog.css'
import  {data}  from "../products";
import SearchProduct from "../SearchProduct/SearchProduct";
import SortOptions from "../SortOptions/SortOptions";
import { IProduct } from "../types";
import axios from "axios";


const ProductFieldCatalog = (props:{products:IProduct[]}): JSX.Element => {
    /*async function returnProductInfo(product:IProduct){
        let obj = {
            key: product.id,
            title:product.title,
            category: product.category,
            brand: product.brand,
            price: product.price,
            discountPercentage: product.discountPercentage,
            rating: product.rating,
            stock: product.stock,
            id: product.id,
        };
        let img = await axios.get(`${product.thumbnail}`);
        obj.thumbnail
        
    }*/
    return (
        <div className='product-field-catalog'>
            {props.products.map(product => {
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