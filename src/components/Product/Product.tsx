import React from "react";
import '../Product/Product.css'
import { useNavigate, Link } from "react-router-dom";
import { IProduct } from "../types";


const Product = ({ title, category, brand, price, discountPercentage, rating, stock, thumbnail, id }: IProduct): JSX.Element => {
    const router = useNavigate()

    return (
        <div className='product'>
            <p className="product-header">{title}</p>
            <div className="product-description">
                <img className="product-img" src={thumbnail}></img>
                <p>Category: {category}</p>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
                <p>Discount: {discountPercentage}</p>
                <p>Rating: {rating}</p>
                <p>Stock: {stock}</p>
            </div>
            <div className="product-btns">

                <button className="btn btn-primary"
                    // onClick={() => router(`/basket`)}
                >ADD TO CARD</button>
                <button className="btn btn-primary"
                    onClick={() => router(`/product/${id}`)}
                >DETAILS</button>
            </div>
        </div>
    )
}

export default Product;