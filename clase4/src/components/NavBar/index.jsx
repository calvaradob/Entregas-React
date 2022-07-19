import React from "react";
import Buttom from '../Buttom';
import CartWidget from '../CartWidget';
import './style.css';

export default function NavBar(){
    return(

        <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#news">Galeria</a></li>
            <li><a href="#contact">Quienes Somos</a></li>
            <li><a href="#about">Contacto</a></li>
            <CartWidget/>
        </ul>

    )
}