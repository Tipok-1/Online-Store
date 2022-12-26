import React from "react";
import '../Basket/Basket.css'
import { useNavigate} from "react-router-dom";
import basket from '../../assets/basket.png';


const Basket = (): JSX.Element => {
    const router = useNavigate()
    return (
        <div className="basket">
            <img className="basket__img" 
            src={basket}

            onClick={() => router(`/basket`)}
            ></img>
        </div>
    )
}

export default Basket;