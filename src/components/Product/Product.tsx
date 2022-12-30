import React from "react";
import '../Product/Product.css'
import { useNavigate, Link } from "react-router-dom";
import { IProduct } from "../types";
import {data} from "../products"
import LazyImage from "../LazyImage/LazyImage";
import axios from "axios";

const Product = ({ title, category, brand, price, discountPercentage, rating, stock, thumbnail, id }: IProduct): JSX.Element => {
    const router = useNavigate()

//<img className="product-img" src={thumbnail}></img>
    /*let url = React.useState(thumbnail);
    const image = React.useMemo(() => {
        console.log("отработала");
        console.log(data);
        return <LazyImage  className="product-img" src={thumbnail} alt = {"Картинка не загрузилась"}/>
    } ,[data])*/
    /*const image = React.useMemo(()=>{
        return <LazyImage  className="product-img" src={thumbnail} alt = {"Картинка не загрузилась"}/>
    },[thumbnail])*/
    //<LazyImage  className="product-img" src={thumbnail} alt = {"Картинка не загрузилась"}/>
    return (
        <div className='product'>
            <p className="product-header">{title}</p>
            <div className="product-description">
                <LazyImage  className="product-img" src={thumbnail} alt = {"Картинка не загрузилась"}/>
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

export default React.memo(Product);