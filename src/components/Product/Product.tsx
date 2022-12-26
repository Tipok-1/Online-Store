import React, { useContext } from "react";
import '../Product/Product.css'
import { useNavigate, Link } from "react-router-dom";
import { IProduct } from "../types";
import { Store } from "../App";

const Product = ({ title, category, brand, price, discountPercentage, rating, stock, thumbnail, id }: IProduct): JSX.Element => {
    const router = useNavigate()
    const store = useContext(Store);

    return (
        <div className='product' style={{backgroundImage: `url(${thumbnail})` }}>
            <p className="product-header">{title}</p>
            <div className="product-description" style={{background: `white`, marginBottom: 20, marginLeft: 3, borderRadius: 9}}>
                {/* <img className="product-img" src={thumbnail}></img> */}
                <p>Category: {category}</p>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
                <p>Discount: {discountPercentage}</p>
                <p>Rating: {rating}</p>
                <p>Stock: {stock}</p>
            </div>
            <div className="product-btns">
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        store.setProducts(id);
                    }}
                >
                    ADD TO CARD
                </button>
                <button className="btn btn-primary"
                    onClick={() => router(`/product/${id}`)}
                >DETAILS</button>
            </div>
        </div >
    )
}

export default Product;