import React from 'react'; 
import './ImgDecoration.css'; 
import imgDecoration from '../desktop/bg-pattern-dots.svg'; 

function ImgDecoration(props){
    return(
        <img src={imgDecoration} alt="un rectangle de poits verts décoratifs" className="ImgDecoration"/>
    )
}

export default ImgDecoration; 