import React, { ChangeEvent } from "react";
import Found from "../Found/Found";
import '../ProductFieldHeader/ProductFieldHeader.css'
import SearchProduct from "../SearchProduct/SearchProduct";
import SortOptions from "../SortOptions/SortOptions";
import {IOption} from "../types"

interface IFilter{
    sort:string,
    query:string
}
const ProductFieldHeader = (props:{filter:IFilter, setFilter:Function, found:number}): JSX.Element => {

    let options:IOption[] = [
        {value:"price-ASC", name: "Sort by price ASC"},
        {value:"price-DESC", name: "Sort by price DESC"},
        {value:"rating-ASC", name: "Sort by rating ASC"},
        {value:"rating-DESC", name: "Sort by rating DESC"},
        {value:"discount-ASC", name: "Sort by discount ASC"},
        {value:"discount-DESC", name: "Sort by discount DESC"},
    ];
    const onChangeSearch = React.useCallback((e:React.ChangeEvent<HTMLInputElement>): void=> props.setFilter({...props.filter, query:(e.target as HTMLInputElement).value})
    ,[]);
    return (
        <div className='product-field-header'>
            <SortOptions  
            value = {props.filter.sort}
            onChange = {selectedSort => props.setFilter({...props.filter, sort:selectedSort})}
            options = {options}/>
            <Found found = {props.found}/>
            <SearchProduct 
                value = {props.filter.query} 
                onChange = {onChangeSearch}
            />
        </div>
    )
}

export default ProductFieldHeader;