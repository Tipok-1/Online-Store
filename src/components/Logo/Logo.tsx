import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import '../Logo/Logo.css'


const Logo = (): JSX.Element => {
  const router = useNavigate()
  const startPage = '/';

  return (
    <div className="logo" onClick={() => router(`${startPage}`)}>
      <img className="logo__img" src={logo}></img>
      Online Store
    </div>
  )
}

export default Logo;