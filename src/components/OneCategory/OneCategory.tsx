import React from "react";
import '../OneCategory/OneCategory.css'

const OneCategory = ({category}) => {
    return (
        <label className="categories">
            <input type="checkbox" id="{children}"/>
            <label className="categories__name" htmlFor="{children}">{category}</label>
        </label>
    )
}

export default OneCategory;