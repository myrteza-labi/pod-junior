import React from 'react'; 
import './Logo.css'; 
import logo from '../desktop/logo.svg'; 

function Logo(props){
    return(
        <div className="Logo">
            <img src={logo} alt="#" className="logoImg"/>
            <p className="logoText" >pod</p>
        </div>
    )
}

export default Logo; 