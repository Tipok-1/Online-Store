import React from "react";
import '../ProductField/ProductField.css'
import ProductFieldCatalog from "../ProductFieldCatalog/ProductFieldCatalog";
import ProductFieldHeader from "../ProductFieldHeader/ProductFieldHeader";

const ProductField = () => {
    return (
        <div className='product-field'>
            <ProductFieldHeader/>
            <ProductFieldCatalog/>
        </div>
    )
}

export default ProductField;