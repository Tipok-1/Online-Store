import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../Toolbar/Toolbar.css'
import '../styles/App.css'
import ButtonBootstrap from "../ButtonBootsrap/ButtonBootsrap";


const Toolbar = () => {
    const resetFilters = 'Reset Filters'
    
    return (
        <div className='toolbar'>
            <ButtonBootstrap>{resetFilters}</ButtonBootstrap>

        </div>
    )
}

export default Toolbar;