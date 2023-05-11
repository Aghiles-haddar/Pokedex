import React from "react";
import './Error.css'
import error from '../../Assets/error.png'

function Error(){
    return(
        <div className="container-global-error">

            <div className="container-error">
                <span className="number-error">404</span>
                <img className="img-error" src={error} alt="" />
            </div>
    
            <p className="message-error">The rocket team <span className="message-error-2">has won this time.</span></p>
            <button className="button-error">Return</button>
            
        </div>
    )
}

export default Error