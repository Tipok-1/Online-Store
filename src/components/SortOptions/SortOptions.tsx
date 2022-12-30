import React from "react";
import '../SortOptions/SortOptions.css';
import { IOption } from "../types";

interface ISortOptions{
    options:IOption[],
    value:string,
    onChange:(sort:string) => void
}
const SortOptions = (props:ISortOptions): JSX.Element => {
    return (
        <select 
            className='sort-options'
            value = {props.value}
            onChange = {e => props.onChange(e.target.value)}
        >
            <option disabled value = "">Sort Options:</option>
            {
                props.options.map((opt:IOption) => 
                    <option key = {opt.value} value = {opt.value}>
                        {opt.name}
                    </option>)
            }
        </select>
    )
}

export default SortOptions;