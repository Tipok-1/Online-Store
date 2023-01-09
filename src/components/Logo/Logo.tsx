import React from "react";
import '../Logo/Logo.css'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';




const Logo = (): JSX.Element => {
    const router = useNavigate()

    return (
        <div className="logo" onClick={() => router(`/dist/index.html`)}>
            <img className="logo__img" src={logo}></img>
            Online Store
        </div>
    )
}

export default Logo;