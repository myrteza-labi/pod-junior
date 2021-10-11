import React from 'react'; 
import './MainImg.css'; 
import mainImgBackground from '../mobile/image-host.jpg'; 

function MainImg(props){
    return(
        <img src={mainImgBackground} alt="un homme entrain de chanter devant un micro" className="MainImg"/>
    )
}

export default MainImg; 