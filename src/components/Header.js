import React from "react";
import logo from '../images/logo.png';

export default function Header(){
    return(
        <header className="header">
            <img src={logo} className="header--image" alt=""/>
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">React Course</h4>
        </header>

    )
}