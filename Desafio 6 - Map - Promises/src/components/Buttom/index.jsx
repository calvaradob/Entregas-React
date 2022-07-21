import React from 'react';
import './style.css'

const Button = ({styles}) => {
    return (
        <button
            className='button-custom'
            style={{...styles}}
        >Presione aquí</button>)
}

export default Button