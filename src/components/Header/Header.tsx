import React from "react";
import Basket from "../Basket/Basket";
import CardTotal from "../CardTotal/CardTotal";
import '../Header/Header.css'
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <CardTotal />
            <Basket />
        </div>
    )
}

export default Header;