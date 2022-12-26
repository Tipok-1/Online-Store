import React from "react";
import '../ProductField/ProductField.css'
import ProductFieldCatalog from "../ProductFieldCatalog/ProductFieldCatalog";
import ProductFieldHeader from "../ProductFieldHeader/ProductFieldHeader";

const ProductField = (props): JSX.Element => {
    return (
        <div className='product-field'>
            <ProductFieldHeader/>
            <ProductFieldCatalog/>
        </div>
    )
}

export default ProductField;