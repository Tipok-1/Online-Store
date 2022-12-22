import React from "react";
import '../Basket/Basket.css'
import basket from '../../assets/basket.png';



const Basket = () => {
    return (
        <div className="basket">
            <img className="basket__img" src={basket}></img>
        </div>
    )
}

export default Basket;