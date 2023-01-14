import React, { ChangeEvent } from "react";
import Found from "../Found/Found";
import '../ProductFieldHeader/ProductFieldHeader.css'
import SearchProduct from "../SearchProduct/SearchProduct";
import SortOptions from "../SortOptions/SortOptions";
import { IOption } from "../types"
//import { useSearchParams } from 'react-router-dom';

interface IFilter {
    sort: string,
    query: string
}
const ProductFieldHeader = (props: { filter: IFilter, setFilter: Function, found: number }): JSX.Element => {
    //const [searchParams, setSearchParams] = useSearchParams();
    /*React.useEffect(() =>{
        if(searchParams.get('search'))
        {
           props.setFilter({ ...props.filter, query: searchParams.get('search')});
        }
        if(searchParams.get('sort'))
        {
            props.setFilter({ ...props.filter, sort: searchParams.get('sort')});
        }
    },[])*/
    let options: IOption[] = [
        { value: "price-ASC", name: "Sort by price ASC" },
        { value: "price-DESC", name: "Sort by price DESC" },
        { value: "rating-ASC", name: "Sort by rating ASC" },
        { value: "rating-DESC", name: "Sort by rating DESC" },
        { value: "discount-ASC", name: "Sort by discount ASC" },
        { value: "discount-DESC", name: "Sort by discount DESC" },
    ];
    const onChangeSearch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        //searchParams.set('search',(e.target as HTMLInputElement).value);
        //setSearchParams(searchParams);
        props.setFilter({...props.filter,query: (e.target as HTMLInputElement).value })
    }, []);
    const onChangeSort = React.useCallback((selectedSort:string) => {
       // searchParams.set('sort',selectedSort);
        //setSearchParams(searchParams);
        props.setFilter({...props.filter,sort: selectedSort })
    },[])
    return (
        <div className='product-field-header'>
            <SortOptions
                value={props.filter.sort}
                onChange={onChangeSort}
                options={options} />
            <Found found={props.found} />
            <SearchProduct
                value={props.filter.query}
                onChange={onChangeSearch}
            />
        </div>
    )
}

export default ProductFieldHeader;