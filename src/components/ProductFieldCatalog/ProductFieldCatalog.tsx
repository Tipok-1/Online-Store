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
    return (
        <div className='product-field-catalog'>
            {
                props.products.length
                ? props.products.map(product => {
                    return (
                        <Product key={product.id} product={product}/>
                    )
                })
                : <h1 style={{color:"white"}}>Ничего не найдено</h1>
            }
        </div>
    )
}

export default ProductFieldCatalog;