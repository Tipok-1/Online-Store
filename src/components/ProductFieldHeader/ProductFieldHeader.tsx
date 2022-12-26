import React from "react";
import Found from "../Found/Found";
import '../ProductFieldHeader/ProductFieldHeader.css'
import SearchProduct from "../SearchProduct/SearchProduct";
import SortOptions from "../SortOptions/SortOptions";

const ProductFieldHeader = (): JSX.Element => {
    return (
        <div className='product-field-header'>
            <SortOptions/>
            <Found/>
            <SearchProduct/>
        </div>
    )
}

export default ProductFieldHeader;