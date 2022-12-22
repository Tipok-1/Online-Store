import React from "react";
import '../SortOptions/SortOptions.css'

const SortOptions = () => {
    return (
        <select className='sort-options'>
            <option disabled>Sort Options:</option>
            <option value="price-ASC"> Sort by price ASC</option>
            <option value="price-DESC">Sort by price DESC</option>
            <option value="rating-ASC">Sort by rating ASC</option>
            <option value="rating-DESC">Sort by rating DESC</option>
            <option value="discount-ASC">Sort by discount ASC</option>
            <option value="discount-DESC">Sort by discount DESC</option>
        </select>
    )
}

export default SortOptions;