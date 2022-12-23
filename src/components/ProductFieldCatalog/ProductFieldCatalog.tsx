import React from "react";
import Found from "../Found/Found";
import Product from "../Product/Product";
import '../ProductFieldCatalog/ProductFieldCatalog.css'
import SearchProduct from "../SearchProduct/SearchProduct";
import SortOptions from "../SortOptions/SortOptions";

// const arr = new Array(100).fill({ title: '1' })
// console.log(arr);

const ProductFieldCatalog = () => {
    return (
        <div className='product-field-catalog'>
            <Product />
        </div>
    )
}

export default ProductFieldCatalog;