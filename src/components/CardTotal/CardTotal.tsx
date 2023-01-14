import React, { useContext } from "react";
import { Store } from "../App";
import { countAllPrice } from "../helpers";
import '../CardTotal/CardTotal.css'


const CardTotal = (): JSX.Element => {
    const [store] = useContext(Store)!;

    return (
        <div className="card-total">
            Cart total: € {countAllPrice(store.products)}
        </div>
    )
}

export default CardTotal;