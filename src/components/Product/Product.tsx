import React from "react";
import '../Product/Product.css'
import ProductHeader from "../ProductHeader/ProductHeader";
import ProductImage from "../ProductImage/ProductImage";


const Product = () => {
    return (
        <div className='product'>
            <ProductHeader/>
            <ProductImage/>
        </div>
    )
}

export default Product;