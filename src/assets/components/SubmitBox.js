import React from 'react'; 
import './SubmitBox.css'; 

function SubmitBox(props){
    return(
        <form action="mailto:myrteza@hotmail.fr" className="SubmitBox" method="post">
            <input name="userMail" type="email" id="userEmail" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" minlength="8" required/>
            <input type="submit" value="send"/>
        </form>
    )
}

export default SubmitBox; 