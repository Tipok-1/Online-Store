import React from "react";
import '../Logo/Logo.css'
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";




const Logo = () => {
    const router = useNavigate()

    return (
        <div className="logo" onClick={() => router(`/`)}>
            <img className="logo__img" src={logo}></img>
            Online Store
        </div>
    )
}

export default Logo;