import React from "react";
import '../Toolbar/Toolbar.css'
import '../styles/App.css'
import ButtonBootstrap from "../ButtonBootsrap/ButtonBootsrap";
import Category from "../Category/Category";


const Toolbar = () => {
    const resetFilters = 'Reset Filters'

    return (
        <div className='toolbar'>
            <Category>Category</Category>
            <ButtonBootstrap>{resetFilters}</ButtonBootstrap>
        </div>
    )
}

export default Toolbar;