import React from "react";
import '../ProductInfoItem/ProductInfoItem.css'


const ProductInfoItem = () => {
    return (
        <div className='product-info-item'>
            <p>Category: "smartphones"</p>
            <p>Brand: "Apple"</p>
            <p>Price: "€549.00"</p>
            <p>Discount: "12.96%"</p>
            <p>Rating: "4.69"</p>
            <p>Stock: "94"</p>
        </div>
    )
}

export default ProductInfoItem;