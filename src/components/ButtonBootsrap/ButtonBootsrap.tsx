import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../Toolbar/Toolbar.css'
import '../styles/App.css'


const ButtonBootstrap = ({children}) => {
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button style={{cursor: 'pointer', margin: 5}} type="button" class="btn btn-primary">{children}</Button>
            </ButtonGroup>
        </div>
    )
}

export default ButtonBootstrap;