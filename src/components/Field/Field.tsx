import React from "react";
import '../Field/Field.css'
import ProductField from "../ProductField/ProductField";
import Toolbar from "../Toolbar/Toolbar";
import { data } from '../products';
import { IProduct } from "../types";

const Field = (): JSX.Element => {
    const ALL_PRODUCTS = data.products;
    let [filterProducts, setfilterProducts] = React.useState(ALL_PRODUCTS);

    function WasSetFilter(arr:IProduct[]){
        setfilterProducts(arr);
    }

    const FilterProducts = React.useMemo(() =>{
        return filterProducts;
    }, [filterProducts])

    return (
        <div className='field'>
            <Toolbar products={ALL_PRODUCTS} WasSetFilter={WasSetFilter}/>
            <ProductField products={FilterProducts}/>
        </div>
    )
}

export default Field;