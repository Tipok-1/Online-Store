import React from "react";
import OneCategory from "../OneCategory/OneCategory";
import './Category.css'
import { IOption, IProduct } from "../types";

interface ICategoty{
    options:IOption[],
    title:string,
    filter:string[],
    products:IProduct[],
    onClick:(add:boolean, filtr:string) => void,
    property:string,
    returnedArray:(arr:IProduct[]) => void,
    reset:boolean,
    setReset:Function
}
const Category = (props:ICategoty): JSX.Element => {
    const sortedByCategory = React.useMemo(() => {
        let arr = [...props.products]; 
                 
        if(props.filter.length)
        {
            arr = arr.filter(p => {
                for(let i = 0; i < props.filter.length; i++)
                {
                    if(p[props.property as keyof IProduct] === props.filter[i])
                    {
                        return true;
                    }
                }
                return false;
            })
        }

        return arr;
    }, [props.filter, props.products]);

    React.useEffect(() =>{
        
        props.returnedArray(sortedByCategory);
    },[sortedByCategory])

    return (
        <div className='category'>
            <div className='categories__title'>{props.title}</div>
            <div className='categories__field'>
                {
                    props.options.map(option => {
                        return (
                            <OneCategory
                                resetCheckbox={props.reset}
                                setReset={props.setReset}
                                key={option.value}
                                category={option.name}
                                value={option.name}
                                onClick={props.onClick}
                            />
                    )})
                }
            </div>
        </div>
    )
}

export default Category;