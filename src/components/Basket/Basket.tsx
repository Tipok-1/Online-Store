import React, { useContext, useEffect, useState } from 'react';
import '../Basket/Basket.css';
import { useNavigate } from 'react-router-dom';
import basket from '../../assets/basket.png';
import { Store } from '../App';
import { IStore } from '../types';

const Basket = (): JSX.Element => {
    const router = useNavigate();

    const [store, setStore] = useContext<IStore>(Store);

    const numberProjects = (store && store.products) ? store.products.length : 0;

    return (
        <div className="basket">
            <p className="basket__count">{numberProjects}</p>
            <img
                className="basket__img"
                src={basket}
                onClick={() => router(`/basket`)}
            ></img>
        </div>
    );
};

export default Basket;
