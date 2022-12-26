import React from "react";
import '../OneCategory/OneCategory.css'
import {IProduct} from '../types'

const OneCategory = ({category}:IProduct): JSX.Element => {
    return (
        <label className="categories">
            <input type="checkbox" id="{children}"/>
            <label className="categories__name" htmlFor="{children}">{category}</label>
        </label>
    )
}

export default OneCategory;