import React from "react";
import OneCategory from "../OneCategory/OneCategory";
import './Category.css'
import categoriesCategory from '../helpers'

const Category = ({ children }) => {

    return (
        <div className='category'>
            <div className='categories__title'>{children}</div>
            <div className='categories__field'>
                <OneCategory>1</OneCategory>
                <OneCategory>1</OneCategory>
                <OneCategory>1</OneCategory>
            </div>
        </div >
    )
}

export default Category;