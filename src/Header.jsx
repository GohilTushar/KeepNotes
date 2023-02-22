import React from "react";
import logo from './Images/logo.png'
const Header=()=>{
    return(
        <>
            <div className="heading">
            <img src={logo} width="100" height="100" alt="logo"/>
            <h1>Google Keep</h1>
            </div>
        </>
    )
}
export default Header;