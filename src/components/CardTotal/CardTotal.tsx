import React, { useContext } from "react";
import { Store } from "../App";
import '../CardTotal/CardTotal.css'
import { countAllPrice } from "../helpers";
import { IStore } from "../types";


const CardTotal = (): JSX.Element => {
    const [store] = useContext(Store)!;

    return (
        <div className="card-total">
            Cart total: € {countAllPrice(store.products)}
        </div>
    )
}

export default CardTotal;