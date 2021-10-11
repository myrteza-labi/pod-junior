import React from 'react'; 
import './SubmitBox.css'; 

function SubmitBox(props){
    return(
        <form action="mailto:myrteza@hotmail.fr" className="SubmitBox" method="post">
            <input name="userMail" type="email" id="userEmail" 
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" minLength="8" 
            placeholder="Email address" required/>
            <input type="submit" value="Request Acces"/>
        </form>
    )
}

export default SubmitBox; 