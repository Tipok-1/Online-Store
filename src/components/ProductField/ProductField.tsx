import React from "react";
import '../ProductField/ProductField.css'
import ProductFieldCatalog from "../ProductFieldCatalog/ProductFieldCatalog";
import ProductFieldHeader from "../ProductFieldHeader/ProductFieldHeader";
import  {data,ProductService}  from "../products";
import {useQuery} from "react-query"
import { IProduct } from "../types";

const ProductField = (): JSX.Element => {
    //const {isLoading, error,data:response,} = useQuery("allProduct", () => ProductService.getAll());

    const [products, setProducts] = React.useState(data.products);

    
    const [filter, setFilter] = React.useState({sort:'', query:''});
    /*async function fetchProducts(){
        const response = await axios.get("https://dummyjson.com/products?limit=100");
        console.log(response);
    }*/
    const sortedProducts = React.useMemo(() => {
            if(filter.sort)
            {
                if(filter.sort === 'price-ASC'){ 
                    return([...products].sort((a,b) => a["price"] - b["price"]));
                }
                if(filter.sort === 'price-DESC'){ 
                    return([...products].sort((a,b) => b["price"] - a["price"]));
                }
                if(filter.sort === 'rating-ASC'){
                    return([...products].sort((a,b) => a["rating"] - b["rating"]));
                }
                if(filter.sort === 'rating-DESC'){
                    return([...products].sort((a,b) => b["rating"] - a["rating"]));
                }
                if(filter.sort === 'discount-ASC'){
                    return([...products].sort((a,b) => a["discountPercentage"] - b["discountPercentage"]));
                }
                if(filter.sort === 'discount-DESC'){
                    return([...products].sort((a,b) => b["discountPercentage"] - a["discountPercentage"]));
                }
                
            }
            return products;
    },[filter.sort, products]);

    const searchAndSortedProducts =  React.useMemo(() => {
        if(filter.query)
        {
            return sortedProducts.filter((product:IProduct) => (product.title as string).toLowerCase().startsWith(filter.query.toLowerCase()));
        }
        return sortedProducts;
    },[filter.query, sortedProducts]);

    
    return (
        <div className='product-field'>
            <ProductFieldHeader filter = {filter} setFilter = {setFilter} found = {searchAndSortedProducts.length}/>
            <ProductFieldCatalog products = {searchAndSortedProducts}/>
        </div>
    )
    
    
}

export default ProductField;