import React from "react";
import Basket from "../Basket/Basket";
import CardTotal from "../CardTotal/CardTotal";
import Logo from "../Logo/Logo";
import '../Header/Header.css'


const Header = (): JSX.Element => {
  return (
    <div className='header'>
      <Logo />
      <CardTotal />
      <Basket />
    </div>
  )
}

export default Header;