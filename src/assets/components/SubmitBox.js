import React from 'react'; 
import './SubmitBox.css'; 




class SubmitBox extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            email: "", 
            isvalid: false,
            message: "",
            className: "",
        }
        this.handleClick = this.handleClick.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
        this.emailCheck = this.emailCheck.bind(this); 
        this.addErrorMessage = this.addErrorMessage.bind(this); 
        this.addDoneMessage = this.addDoneMessage.bind(this); 


    }
    
    handleChange(e){
        this.setState({
            email: e.target.value
        })
    }
    handleClick(e){
        e.preventDefault(); 
        this.emailCheck();
    }
    
    emailCheck(){
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(this.state.email.match(regex)){
            this.addDoneMessage()
            return(true)
        } else {
            this.addErrorMessage();
        }
    }
    addDoneMessage(){
        this.setState({
            message: "Email envoyé avec succès",
            className: "message doneMessage"
        })
    }
    addErrorMessage(){
        this.setState({
            message: "Oops! Please check you email",
            className: "message errorMessage"
        })
    }

    render(){
        
        return(
            <div className="formContainer">
                <form id="mainForm" action="mailto:myrteza@hotmail.fr" className="SubmitBox" method="post">
                    <input onChange={this.handleChange} id="inputEmail" name="userMail" type="email" 
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" minLength="8" 
                    placeholder="Email address" required/>
                    <input  onClick={this.handleClick} type="submit" value="Request Acces"/>
                </form>
                <p className={this.state.className} >{this.state.message}</p>
            </div>
            
        )
    }
    
}

export default SubmitBox; 

