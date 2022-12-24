import React from "react";
import ButtonBootstrap from "../ButtonBootsrap/ButtonBootsrap";
import '../Product/Product.css'
import { useNavigate } from "react-router-dom";


const Product = ({title, category, brand, price, discount, rating, stock, thumbnail, id}) => {
    const router = useNavigate()

    return (
        <div className='product'>
            <p className="product-header">{title}</p>
            <div className="product-description">
                <img className="product-img" src={thumbnail}></img>
                <p>Category: {category}</p>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
                <p>Discount: {discount}</p>
                <p>Rating: {rating}</p>
                <p>Stock: {stock}</p>
            </div>
            <div className="product-btns">

            <ButtonBootstrap>ADD TO CARD</ButtonBootstrap>
            <button class="btn btn-primary"
                onClick={() => router(`/product/${id}`)}
            >DETAILS</button>
            </div>
        </div>
    )
}

export default Product;