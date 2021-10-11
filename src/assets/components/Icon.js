import React from 'react'; 
import './Icon.css'; 

function Icon(props){
    return(
        <img src={props.src} alt={props.alt} className="Icon"/>
    )
}

export default Icon; 