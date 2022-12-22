import React from "react";
import '../Logo/Logo.css'
import logo from '../../assets/logo.png';



const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__img" src={logo}></img>
            Online Store
        </div>
    )
}

export default Logo;