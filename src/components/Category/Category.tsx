import React from "react";
import OneCategory from "../OneCategory/OneCategory";
import './Category.css'
import categoriesCategory from '../helpers'
import { data } from "../products";

const Category = () => {

    return (
        <div className='category'>
            <div className='categories__title'>Category</div>
            <div className='categories__field'>
            {data.products.map(product => {
                return (
                    <OneCategory
                        category={product.category}
                    />
                )
            })}
            </div>
        </div >
    )
}

export default Category;