import React from "react";
import '../SearchProduct/SearchProduct.css'

const SearchProduct = (): JSX.Element => {
    return (
        <input type="search" placeholder="Search product" className='search-product'>
        </input>
    )
}

export default SearchProduct;