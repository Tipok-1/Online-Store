import React from "react";
import '../Field/Field.css'
import ProductField from "../ProductField/ProductField";
import Toolbar from "../Toolbar/Toolbar";

const Field = (props): JSX.Element => {
    return (
        <div className='field'>
            <Toolbar/>
            <ProductField/>
        </div>
    )
}

export default Field;