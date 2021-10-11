import React from 'react'; 
import './PodRequest.css'; 

function PodRequest(props){
    return(
        <div className="PodRequest" >
            {props.children}
        </div>
    )
}

export default PodRequest; 