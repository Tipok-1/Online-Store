import React, { useEffect, useMemo } from "react";
import '../Toolbar/Toolbar.css'
import '../App.css'
import { Button } from "react-bootstrap";
import { IProduct, IOption } from "../types";
import Category from "../Category/Category";


const Toolbar = (props:{products:IProduct[],WasSetFilter:(arr:IProduct[]) => void}): JSX.Element => {
    const resetFilters = 'Reset Filters';

    const [filter, setFilter]= React.useState<{category:string[],brand:string[]}>({ category: [], brand: [] });
    const [products, setProducts] = React.useState(props.products);


    function getUniqOption(point:string):IOption[]{
        let uniqCategory:Set<string> = new Set();

        props.products.forEach(p => {
            if(p.hasOwnProperty(point))
            {
                let key = point as keyof IProduct;
                uniqCategory.add(p[key] as string);
            }
        });
        let CategoryWhithValues:IOption[] = [];
        [...uniqCategory].forEach(p => CategoryWhithValues.push({name:p, value:`${p}_value`}));
        
        return CategoryWhithValues;
    }
    let firstFilter = getUniqOption('category');
    let secondFilter = getUniqOption('brand');
    
    function addFilterCategory(add:boolean,fil:string){
        
        if(add){
            setFilter({...filter, category:[...filter.category, fil]});
        }
        else{
            let copy = Object.assign([], filter.category);
            copy.splice(copy.indexOf(fil), 1);
            setFilter({...filter, category:copy});
        }
    }
    function addFilterBrand(add:boolean,fil:string){
        
        if(add){
            setFilter({...filter, brand:[...filter.brand, fil]});
        }
        else{
            let copy = Object.assign([], filter.brand);
            copy.splice(copy.indexOf(fil), 1);
            setFilter({...filter, brand:copy});
        }
    }
    const [sortedByCategory, setSortedByCategory] = React.useState<IProduct[]>([]);
    function returnedSortedByCategory(arr:IProduct[]){
        setSortedByCategory(arr);
    }
    const [sortedByBrand, setSortedByBrand] = React.useState<IProduct[]>([]);
    function returnedSortedByBrand(arr:IProduct[]){
        setSortedByBrand(arr);
    }
    const sortedBrandAndCategory = useMemo(() =>{       
        return products.filter(el => sortedByCategory.includes(el) && sortedByBrand.includes(el));
    },[sortedByBrand, sortedByCategory])

    useEffect(() =>{
        props.WasSetFilter(sortedBrandAndCategory);
    },[sortedBrandAndCategory])

    const [reset, setReset] = React.useState(false);
    function resetFilter(){
        setFilter({category:[],brand:[]});
        setReset(true)
    }
    return (
        <div className='toolbar'>
            <Category 
                options={firstFilter} 
                title={'Category'} 
                filter={filter.category} 
                onClick={addFilterCategory}
                products={products}
                property={'category'}
                returnedArray = {returnedSortedByCategory}
                reset={reset}
                setReset={setReset}
            ></Category>
            <Category 
                options={secondFilter} 
                title={'Brand'} 
                filter={filter.brand} 
                onClick={addFilterBrand}
                property={'brand'}
                products={products}
                returnedArray = {returnedSortedByBrand}
                reset={reset}
                setReset={setReset}
            ></Category>
            <Button onClick={resetFilter}>{resetFilters}</Button>
        </div>
    )
}

export default Toolbar;