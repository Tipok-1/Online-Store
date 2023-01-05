import React, { useContext, useEffect, useState } from 'react';
import '../Basket/Basket.css';
import { useNavigate } from 'react-router-dom';
import basket from '../../assets/basket.png';
import { Store } from '../App';


const Basket = (): JSX.Element => {
    const router = useNavigate();
    const [store] = useContext(Store)!;
    return (
        <div className="basket">
            <p className="basket__count">{store.products.length}</p>
            <img
                className="basket__img"
                src={basket}
                onClick={() => router(`/basket`)}
            ></img>
        </div>
    );
};

export default Basket;
