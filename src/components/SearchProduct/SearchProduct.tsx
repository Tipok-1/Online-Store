import React, { ChangeEvent } from "react";
import '../SearchProduct/SearchProduct.css'

interface ISearchProduct{
    value:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void
}
const SearchProduct = (props:ISearchProduct): JSX.Element => {
    return (
        <input 
            {...props}
            type="search" 
            placeholder="Search product" 
            className='search-product'
        />
    )
}

export default SearchProduct;