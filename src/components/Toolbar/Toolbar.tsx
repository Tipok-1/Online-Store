import React from "react";
import '../Toolbar/Toolbar.css'
import '../styles/App.css'
import { Button } from "react-bootstrap";
import Category from "../Category/Category";


const Toolbar = (): JSX.Element => {
    const resetFilters = 'Reset Filters';

    return (
        <div className='toolbar'>
            <Category></Category>
            <Button>{resetFilters}</Button>
        </div>
    )
}

export default Toolbar;