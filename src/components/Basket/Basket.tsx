import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import basket from '../../assets/basket.png';
import { Store } from '../App';
import '../Basket/Basket.css';


const Basket = (): JSX.Element => {
  const router = useNavigate();
  const basketUrl = '/basket';  

  const [store] = useContext(Store)!;

  return (
    <div className="basket">
      <p className="basket__count">{store.products.length}</p>
      <img
        className="basket__img"
        src={basket}
        onClick={() => router(`${basketUrl}`)}
      ></img>
    </div>
  );
};

export default Basket;
