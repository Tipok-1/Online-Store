import React from "react";
import '../OneCategory/OneCategory.css'

const OneCategory = ({children}) => {
    return (
        <label>
            <input type="checkbox" id="{children}"/>
            <label htmlFor="{children}">{children}</label>
        </label>
    )
}

export default OneCategory;